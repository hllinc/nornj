﻿import nj from '../core';
import { assign } from '../utils/tools';
import compileStringTmpl from '../parser/checkStringElem';
import createTmplRule from '../utils/createTmplRule';

export function createTaggedTmpl(opts = {}) {
  const { outputH, delimiters, fileName } = opts;
  const tmplRule = delimiters ? createTmplRule(delimiters) : nj.tmplRule;

  return function () {
    return compileStringTmpl.apply({ tmplRule, outputH, fileName }, arguments);
  };
}

export function createTaggedTmplH(opts = {}) {
  opts.outputH = true;
  return createTaggedTmpl(opts);
}

export const taggedTmpl = createTaggedTmpl({ outputH: false });
export const taggedTmplH = createTaggedTmplH();
export function template() {
  return (nj.outputH ? taggedTmplH : taggedTmpl).apply(null, arguments)();
}

assign(nj, {
  createTaggedTmpl,
  createTaggedTmplH,
  taggedTmpl,
  taggedTmplH,
  template
});