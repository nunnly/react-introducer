!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define("main",[],n):"object"==typeof exports?exports.main=n():t.main=n()}(window,function(){return function(t){var n={};function e(d){if(n[d])return n[d].exports;var o=n[d]={i:d,l:!1,exports:{}};return t[d].call(o.exports,o,o.exports,e),o.l=!0,o.exports}return e.m=t,e.c=n,e.d=function(t,n,d){e.o(t,n)||Object.defineProperty(t,n,{enumerable:!0,get:d})},e.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},e.t=function(t,n){if(1&n&&(t=e(t)),8&n)return t;if(4&n&&"object"==typeof t&&t&&t.__esModule)return t;var d=Object.create(null);if(e.r(d),Object.defineProperty(d,"default",{enumerable:!0,value:t}),2&n&&"string"!=typeof t)for(var o in t)e.d(d,o,function(n){return t[n]}.bind(null,o));return d},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,n){return Object.prototype.hasOwnProperty.call(t,n)},e.p="/build/",e(e.s=1)}([function(t,n){t.exports='<h1 id="react-introducer">react-introducer</h1>\n<p>主要用于新手引导</p>\n<h3 id="useage">useage</h3>\n<pre><code class="language-jsx">import {Intro, getController} from &#39;abc-intro&#39;;\n\n&lt;Intro\n tooltip={&lt;div&gt;不添加则显示默认&lt;/div&gt;}\n step={1} name=&quot;引导1&quot;&gt;包裹需要引导的节点&lt;/Intro&gt;\n\nconst controller = getController(&#39;引导1&#39;);\n\ncontroller.start();\n</code></pre>\n<h3 id="api">api</h3>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>name</td>\n<td>用于处理引导的命名空间, 同一个页面可以添加多个不同name的Intro节点</td>\n<td>string</td>\n<td>&#39;global&#39;</td>\n</tr>\n<tr>\n<td>step</td>\n<td>用于设置step的步骤, 最小值是1</td>\n<td>number</td>\n<td>必填</td>\n</tr>\n<tr>\n<td>tooltip</td>\n<td>用于显示提示框</td>\n<td>ReactNode</td>\n<td>默认Tooltip</td>\n</tr>\n<tr>\n<td>placement</td>\n<td>提示框位置，可选 <code>top</code> <code>left</code> <code>right</code> <code>bottom</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code> <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code> <code>rightBottom</code></td>\n<td>string e.g:[&#39;top&#39;, &#39;left&#39;]</td>\n<td>&#39;top&#39;</td>\n</tr>\n</tbody></table>\n<h3 id="tooltipprops">tooltipProps</h3>\n<table>\n<thead>\n<tr>\n<th>属性</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody><tr>\n<td>step</td>\n<td>当前处于的步骤</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>count</td>\n<td>当前介绍总步骤</td>\n<td>number</td>\n<td></td>\n</tr>\n<tr>\n<td>start</td>\n<td>开始介绍</td>\n<td>function() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>end</td>\n<td>结束介绍</td>\n<td>function() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>goToStep</td>\n<td>根据Intro实例跳转到指定介绍</td>\n<td>function(step: Intro) =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>prevStep</td>\n<td>跳转到上一步</td>\n<td>function() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>nextStep</td>\n<td>跳转到下一步</td>\n<td>function() =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td>goToStepNumber</td>\n<td>根据step跳转到指定步骤</td>\n<td>function(step: number) =&gt; void</td>\n<td></td>\n</tr>\n<tr>\n<td></td>\n<td></td>\n<td></td>\n<td></td>\n</tr>\n</tbody></table>\n'},function(t,n,e){"use strict";e.r(n);var d,o=e(0),r=e.n(o);document.querySelector("#box").innerHTML=r.a,hljs.configure({}),(d=document.querySelectorAll("pre code"),function(t){if(Array.isArray(t)){for(var n=0,e=new Array(t.length);n<t.length;n++)e[n]=t[n];return e}}(d)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(d)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()).forEach(function(t){hljs.highlightBlock(t)})}])});