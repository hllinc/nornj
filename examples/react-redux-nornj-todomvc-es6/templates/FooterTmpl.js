export default {"type":"nj_root","content":[{"type":"p","content":[{"type":"nj_plaintext","content":[{"props":null,"strs":["Show: "],"isAll":false}]},{"type":"nj_expr","expr":"each","refer":{"props":[{"prop":{"name":"filters"},"escape":true}],"strs":["",""],"isAll":true},"content":[{"type":"nj_expr","expr":"if","refer":{"props":[{"prop":{"filters":[{"name":"iscurrent"}],"name":"filter"},"escape":true}],"strs":["",""],"isAll":true},"content":[{"type":"nj_plaintext","content":[{"props":[{"prop":{"name":"name"},"escape":true}],"strs":["",""],"isAll":true}]}],"hasElse":true,"contentElse":[{"type":"Linkto","params":{"to":{"props":[{"prop":{"filters":[{"name":"todostate"}],"name":"filter"},"escape":true}],"strs":["/",""],"isAll":false}},"content":[{"type":"nj_plaintext","content":[{"props":[{"prop":{"name":"name"},"escape":true}],"strs":["",""],"isAll":true}]}]}]},{"type":"nj_expr","expr":"if","refer":{"props":[{"prop":{"filters":[{"params":["Active"],"name":"equal"}],"name":"name"},"escape":true}],"strs":["",""],"isAll":true},"content":[{"type":"nj_plaintext","content":[{"props":null,"strs":["."],"isAll":false}]}],"hasElse":true,"contentElse":[{"type":"nj_plaintext","content":[{"props":null,"strs":[", "],"isAll":false}]}]}]},{"type":"nj_plaintext","content":[{"props":null,"strs":[""],"isAll":false}]}]}]};