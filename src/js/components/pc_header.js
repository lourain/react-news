import React, {Component} from 'react'
import {Row, Col, Menu, Icon, Form, Button, Modal,Tabs,Input} from 'antd'
import logoPath from '../../images/logo.png'

const FormItem = Form.Item;
const TabPane = Tabs.TabPane;
class PCHeader extends Component {
    constructor() {
        super()
        this.state = {
            current: 'toutiao',
            modeVisible: false,
            action: 'login',
            hasLogined: false,
            userNickName: '',
            useid: 0
        }
    }
    setModalVisible(value) {
        this.setState({modeVisible:value})
    }
    handleClick(e){
        if (e.key === 'register'){
            this.setState({
                current:'register'
            })
            this.setModalVisible(true)
        }else{
            this.setState({current:e.key})
        }
    }
    handleSubmit(e){
        e.preventDefault()
        const formData = this.props.form.getFieldsValue()

    }
    render() {
        const {getFieldDecorator} = this.props.form
        const userShow = this.state.hasLogined
            ? <Menu.Item key='logout' class="register">
                <Button type='primary' htmlType='button'>{this.state.userNickName}</Button>
                &nbsp;&nbsp;
                <a target="_blank">
                    <Button type='dashed' htmlType='button'>个人中心</Button>
                </a>
                &nbsp;&nbsp;
                <Button type='ghost' htmlType='button'>退出</Button>
            </Menu.Item>
            :
            <Menu.Item key="register" className="register">
                <Icon type='appstore'/>注册/登陆
            </Menu.Item>
        return (
            <header>
                <Row>
                    <Col span={2}></Col>
                    <Col span={4}>
                        <a href="/" className='logo'>
                            <img src={logoPath} alt="logo"/>
                            <span>ReactNative</span>
                        </a>
                    </Col>
                    <Col span={14}>
                        <Menu mode="horizontal" onClick={this.handleClick.bind(this)} selectedKeys={[this.state.current]}>
                            <Menu.Item key="toutiao">
                                <Icon type='appstore'/>头条
                            </Menu.Item>
                            <Menu.Item key="shehui">
                                <Icon type='appstore'/>社会
                            </Menu.Item>
                            <Menu.Item key="guonei">
                                <Icon type='appstore'/>国内
                            </Menu.Item>
                            <Menu.Item key="guoji">
                                <Icon type='appstore'/>国际
                            </Menu.Item>
                            <Menu.Item key="yule">
                                <Icon type='appstore'/>娱乐
                            </Menu.Item>
                            <Menu.Item key="tiyu">
                                <Icon type='appstore'/>体育
                            </Menu.Item>
                            <Menu.Item key="keji">
                                <Icon type='appstore'/>科技
                            </Menu.Item>
                            <Menu.Item key="shishang">
                                <Icon type='appstore'/>时尚
                            </Menu.Item>
                            {userShow}
                        </Menu>
                        <Modal title='用户中心' wrapClassName='vertical-center-modal' visible={this.state.modeVisible}
                               onCancel={() => this.setModalVisible(false)}
                               onOk={() => this.setModalVisible(false)} okText='close'>
                            <Tabs type="card">
                                <TabPane tab="注册" key='2'>
                                    <Form horizontal='true' onSubmit={this.handleSubmit.bind(this)}>
                                        <FormItem label="账户">
                                            {getFieldDecorator('r_userName') (<Input type='text' placeholder="请输入账号" />)}

                                        </FormItem>
                                        <FormItem label="密码" >
                                            {getFieldDecorator('r_password')(<Input type='password' placeholder="请输入密码" />)}
                                        </FormItem>
                                        <FormItem label="确认密码">
                                            {getFieldDecorator('r_confirmpassword')(<Input type='password' placeholder="请再次输入密码" />)}
                                        </FormItem>
                                        <Button type='primary' htmlType='submit'>注册</Button>
                                    </Form>
                                </TabPane>
                            </Tabs>

                        </Modal>
                    </Col>
                    <Col span={4}></Col>
                </Row>
            </header>
        )
    }
}

export default Form.create()(PCHeader)