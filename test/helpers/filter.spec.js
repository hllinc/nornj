﻿import { render } from '../../src/compiler/compile';
import '../../src/utils/createTmplRule';

describe('filter', () => {
  it('.', () => {
    expect(render("{{ a.b['c'].length }}", {
      a: {
        b: {
          c: 'abc'
        }
      }
    })).toBe(3);
  });

  it('>', () => {
    expect(render('{{ 2 > 1 }}')).toBe(true);
  });

  it('>=', () => {
    expect(render('{{ 2 >= 2 }}')).toBe(true);
  });

  it('<', () => {
    expect(render('{{ 2 < (1) }}')).toBe(false);
  });

  it('<=', () => {
    expect(render('{{ 2 <= 1 }}')).toBe(false);
  });

  it('==', () => {
    expect(render('{{ 1 == 1 }}')).toBe(true);
  });

  it('===', () => {
    expect(render('{{ 1 === 1 }}')).toBe(true);
  });

  it('!=', () => {
    expect(render('{{ 1 != 2 }}')).toBe(true);
  });

  it('!==', () => {
    expect(render('{{ undefined !== null }}')).toBe(true);
  });

  it('?', () => {
    expect(render('{{ 1 > 2 ? (true, false) }}')).toBe(false);
  });

  it('!', () => {
    expect(render('{{ true | ! }}')).toBe(false);
  });

  it('+', () => {
    expect(render('{{ 1 + (2 + 3) }}')).toBe(6);
  });

  it('-', () => {
    expect(render('{{ 3 - 2 - 1 }}')).toBe(0);
  });

  it('*', () => {
    expect(render('{{ 3 * 5 }}')).toBe(15);
  });

  it('/', () => {
    expect(render('{{ 15 / 2 }}')).toBe(7.5);
  });

  it('%', () => {
    expect(render('{{ 10 % 3 }}')).toBe(1);
  });

  it('&&', () => {
    expect(render("{{ 1 == '1' && (1 == '2') }}")).toBe(false);
  });

  it('||', () => {
    expect(render("{{ 1 == '1' || (1 == '2') }}")).toBe(true);
  });

  it('int & float', () => {
    expect(render("{{ 20.5 | int * (10.05 | float) + (2 ** 3) + (19 // 2) }}")).toBe(218);
  });

  it('bool', () => {
    expect(render("{{ 'false' | bool }}")).toBe(false);
  });

  it('_(method)', () => {
    expect(render("{{ 'abc'.substr(1) }}")).toBe('bc');
  });

  it('..', () => {
    expect(render("{{ 0 .. 5 .length }}")).toBe(6);
  });

  it('..>', () => {
    expect(render("{{ 0 ..< 5 .length }}")).toBe(5);
  });

  it('<=>', () => {
    expect(render("{{ 2 <=> 1 }}")).toBe(1);
  });

  it('array', () => {
    expect(render("{{['1'[0]['length'], '123'[1], '345'[0], ['4567'['length'], 5].join('-')].join('-')}}")).toBe('1-2-3-4-5');
  });

  it('object', () => {
    expect(render(`<img src="{{ { src: 'http://test.com/img.png' }.src }}">`)).toBe('<img src="http://test.com/img.png" />');
  });
});