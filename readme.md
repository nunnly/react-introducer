# react-introducer

<a href="https://www.npmjs.com/package/react-introducer"><img src="https://img.shields.io/npm/dt/react-introducer.svg" alt="Downloads"></a>
<a href="https://www.npmjs.com/package/react-introducer"><img src="https://img.shields.io/npm/v/react-introducer.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/react-introducer"><img src="https://img.shields.io/npm/l/react-introducer.svg" alt="License"></a>

Easily help you create new features step by step.

帮助你快速的创建产品介绍(新手引导).

[live demo](https://nunnly.github.io/react-introducer/demo.html)

### useage

```jsx
import {Intro, getController} from 'react-introducer';

<Intro
 tooltip={<div>replace default tooltip</div>}
 step={1} name="introName"><Component>user custom component</Component></Intro>

const controller = getController('introName');

controller.start();

```



### api

| 属性props | 说明description                                              | 类型 type                  | 默认值 default |
| --------- | ------------------------------------------------------------ | -------------------------- | -------------- |
| name      | 用于处理引导的命名空间, 同一个页面可以添加多个不同name的Intro节点.<br />Used to handle the boot namespace, the same page can add multiple Intro nodes with different names | string                     | 'global'       |
| step      | 用于设置step的步骤, 最小值是1<br />Step for setting the step, the minimum is 1 | number                     | 必填           |
| tooltip   | 用于替换提示栏<br />Used to replace the tooltip              | ReactNode                  | 默认Tooltip    |
| placement | 提示框位置，可选<br /><br />Used to set tooltip place `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string e.g:['top', 'left'] | 'top'          |

**Tooltip component will receive ToolTipProps**

### TooltipProps

| 属性 props     | 说明 description                                      | 类型 type                      | 默认值default |
| -------------- | ----------------------------------------------------- | ------------------------------ | ------------- |
| step           | 当前处于的步骤<br />current step                      | number                         |               |
| count          | 当前介绍总步骤<br />count of step                     | number                         |               |
| start          | 开始介绍<br />start to introduce;                     | function() => void             |               |
| end            | 结束介绍<br />end to introduce;                       | function() => void             |               |
| goToStep       | 根据Intro实例跳转到指定介绍<br />go to step by Intro  | function(step: Intro) => void  |               |
| prevStep       | 跳转到上一步<br />go to previous step                 | function() => void             |               |
| nextStep       | 跳转到下一步<br />go to next step                     | function() => void             |               |
| goToStepNumber | 根据step跳转到指定步骤<br />go to step by step number | function(step: number) => void |               |
|                |                                                       |                                |               |

