import React, { Component } from "react";
import { Input, Button, Modal, Row, Col, Slider, InputNumber } from "antd";

export default class SeachBar extends Component {
  state = {
    visible: false,
    inputValue: 1,
  };

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = (e) => {
    this.setState({
      visible: false,
    });
  };

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };
  onChange = (value) => {
    this.setState({
      inputValue: value,
    });
  };
  render() {
    return (
      <div style={{ padding: 30, margin: 15, display: "flex" }}>
        <Input
          onChange={this.props.handleChange}
          onPressEnter={this.props.handleSubmit}
          size="middle"
          type="text"
        />
        <Button type="primary" onClick={this.showModal}>
          Save
        </Button>
        <Modal
          title="Сохранить запросы"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <Row gutter={[16, 16]}>
            {" "}
            <Col span={18}>
              <p>Запрос</p>
              <Input
                size="middle"
                type="text"
                defaultValue={this.props.input}
              />
            </Col>
          </Row>
          <Row gutter={[16, 16]}>
            <Col span={12}>
              <Slider
                min={1}
                max={25}
                onChange={this.onChange}
                value={
                  typeof this.state.inputValue === "number"
                    ? this.state.inputValue
                    : 0
                }
              />
            </Col>
            <Col span={4}>
              <InputNumber
                min={1}
                max={20}
                style={{ margin: "0 16px" }}
                value={this.state.inputValue}
                onChange={this.onChange}
              />
            </Col>
          </Row>
        </Modal>
      </div>
    );
  }
}
