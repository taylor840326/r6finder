import React, { useState } from 'react';
import { Button, Modal, Image } from 'antd';

import icon from '../../../../assets/icon.png';
import './index.css';

function R6About({ isOpen, handleOk }) {
  return (
    <>
      <Modal
        title="About R6Finder"
        open={isOpen}
        onOk={handleOk}
        onCancel={handleOk}
        okButtonProps={{ style: { display: 'none' } }}
        cancelButtonProps={{ style: { display: 'none' } }}
      >
        <div className="modal-body">
          {/* 主体 */}
          <div className="modal-body-content">
            {/* 左侧说明 */}
            <div className="modal-body-content-left">
              {/* 商标及版本 */}
              <div className="trademark">
                <div>R6Finder Version 1.0.0</div>
              </div>

              {/* 引擎版本 */}
              <div className="engine">
                <div>grep 3.11</div>
              </div>

              {/* 详细开源组件及版本 */}
              <div className="components">
                <div>gnu grep </div>
                <div>gnu sed </div>
                <div>gnu awk</div>
              </div>
            </div>

            {/* 右侧图标 */}
            <div>
              <Image style={{ width: 80, height: 80 }} src={icon} />
            </div>
          </div>

          {/* 底部标识和连接 */}
          <div className="modal-footer">
            <div className="modal-footer-item">@2024 r6finder</div>
            <div className="modal-footer-right">
              <div className="modal-footer-item">开源许可</div>
              <div className="modal-footer-item">关于我们</div>
              <div className="modal-footer-item">帮助支持</div>
              <div className="modal-footer-item">更新日志</div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
}

export default R6About;
