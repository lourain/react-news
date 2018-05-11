import React,{Component} from 'react'
import {Icon,Modal,Tabs,Form,Input,Button} from 'antd'
const FormItem = Form.Item
const TabPane = Tabs.TabPane
class MobileHeader extends Component {
    constructor(){
        super()
        this.state = {
            hasLogined:false,
            modeVisible: false,
        }
    }
    handleClick(value,e){
        e.preventDefault()
        console.log(arguments);
        this.setState({
            modeVisible:value
        })
    }
    handleSubmit(e){
        e.preventDefault()
        let formData = this.props.form.getFieldsValue()
        console.log(formData);

    }
    render() {
        const {getFieldDecorator} = this.props.form
        const userShow = this.state.hasLogined?
            <Icon type='tag'/>
            :
            <Icon type='star' onClick={this.handleClick.bind(this,true)} className='icon'/>
        return (
            <header>
                <a href="/" className="logo">
                    <img src={require('../../images/logo.png')} alt=""/>
                    <span>React News</span>
                    {userShow}
                </a>
                <Modal visible={this.state.modeVisible} onCancel={this.handleClick.bind(this,false)} onOk={this.handleClick.bind(this,false)}>
                    <Tabs>
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
            </header>
        )
    }
}
export default Form.create()(MobileHeader)