export default function(view, vars) {
  let template = require(`../../html/${view}.html`);

  return new Function("return `" + template + "`;").call(vars);
}