import React from 'react';
import { Intro, getController } from '../../src';


export default class Home extends React.Component {
    start = () => {
        const controller = getController();
        controller.start();
    }

    render() {
        return <div>
            <div onClick={this.start}>Click on me to start the introduction.</div>
            <Intro step={3}>
                <table>
                    <thead>
                        <tr>
                            <th><Intro step={1}>Property</Intro></th>
                            <th>Description</th>
                            <th>Type</th>
                            <th>Default</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <Intro step={2}>arrowPointAtCenter</Intro>
                            </td>
                            <td>
                                Whether the arrow is pointed at the center of target, supported after <code>antd@1.11+</code></td>
                            <td>boolean</td>
                            <td><code>false</code></td>
                        </tr>
                        <tr>
                            <td>autoAdjustOverflow</td>
                            <td>Whether to adjust popup placement automatically when popup is off screen</td>
                            <td>boolean</td>
                            <td><code>true</code></td>
                        </tr>
                        <tr>
                            <td>defaultVisible</td>
                            <td>Whether the floating tooltip card is visible by default</td>
                            <td>boolean</td>
                            <td><code>false</code></td>
                        </tr>
                        <tr>
                            <td>getPopupContainer</td>
                            <td>The DOM container of the tip, the default behavior is to create a <code>div</code> element
						in <code>body</code></td>
                            <td>Function(triggerNode)</td>
                            <td>() =&gt; document.body</td>
                        </tr>
                        <tr>
                            <td>mouseEnterDelay</td>
                            <td>Delay in seconds, before tooltip is shown on mouse enter</td>
                            <td>number</td>
                            <td>0</td>
                        </tr>
                        <tr>
                            <td>mouseLeaveDelay</td>
                            <td>Delay in seconds, before tooltip is hidden on mouse leave</td>
                            <td>number</td>
                            <td>0.1</td>
                        </tr>
                        <tr>
                            <td>overlayClassName</td>
                            <td>Class name of the tooltip card</td>
                            <td>string</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>overlayStyle</td>
                            <td>Style of the tooltip card</td>
                            <td>object</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>placement</td>
                            <td>The position of the tooltip relative to the target, which can be one of <code>top</code> <code>left</code>
                                <code>right</code> <code>bottom</code> <code>topLeft</code> <code>topRight</code> <code>bottomLeft</code>
                                <code>bottomRight</code> <code>leftTop</code> <code>leftBottom</code> <code>rightTop</code>
                                <code>rightBottom</code></td>
                            <td>string</td>
                            <td><code>top</code></td>
                        </tr>
                        <tr>
                            <td>trigger</td>
                            <td>Tooltip trigger mode</td>
                            <td><code>hover</code> | <code>focus</code> | <code>click</code> | <code>contextMenu</code></td>
                            <td><code>hover</code></td>
                        </tr>
                        <tr>
                            <td>visible</td>
                            <td>Whether the floating tooltip card is visible or not</td>
                            <td>boolean</td>
                            <td><code>false</code></td>
                        </tr>
                        <tr>
                            <td>onVisibleChange</td>
                            <td>Callback executed when visibility of the tooltip card is changed</td>
                            <td>(visible) =&gt; void</td>
                            <td>-</td>
                        </tr>
                        <tr>
                            <td>align</td>
                            <td>this value will be merged into placement's config, please refer to the settings <a
                                href="https://github.com/react-component/tooltip">rc-tooltip</a></td>
                            <td>Object</td>
                            <td>-</td>
                        </tr>
                    </tbody>
                </table>
            </Intro>
        </div>
    }
}