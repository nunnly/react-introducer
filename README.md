# react-introducer

主要用于新手引导

[live demo](https://nunnly.github.io/react-introducer/demo.html)

### useage

```jsx
import {Intro, getController} from 'abc-intro';

<Intro
 tooltip={<div>不添加则显示默认</div>}
 step={1} name="引导1">包裹需要引导的节点</Intro>

const controller = getController('引导1');

controller.start();

```



### api

| 属性      | 说明                                                         | 类型                       | 默认值      |
| --------- | ------------------------------------------------------------ | -------------------------- | ----------- |
| name      | 用于处理引导的命名空间, 同一个页面可以添加多个不同name的Intro节点 | string                     | 'global'    |
| step      | 用于设置step的步骤, 最小值是1                                | number                     | 必填        |
| tooltip   | 用于显示提示框                                               | ReactNode                  | 默认Tooltip |
| placement | 提示框位置，可选 `top` `left` `right` `bottom` `topLeft` `topRight` `bottomLeft` `bottomRight` `leftTop` `leftBottom` `rightTop` `rightBottom` | string e.g:['top', 'left'] | 'top'       |

### tooltipProps

| 属性           | 说明                        | 类型                           | 默认值 |
| -------------- | --------------------------- | ------------------------------ | ------ |
| step           | 当前处于的步骤              | number                         |        |
| count          | 当前介绍总步骤              | number                         |        |
| start          | 开始介绍                    | function() => void             |        |
| end            | 结束介绍                    | function() => void             |        |
| goToStep       | 根据Intro实例跳转到指定介绍 | function(step: Intro) => void  |        |
| prevStep       | 跳转到上一步                | function() => void             |        |
| nextStep       | 跳转到下一步                | function() => void             |        |
| goToStepNumber | 根据step跳转到指定步骤      | function(step: number) => void |        |
|                |                             |                                |        |

