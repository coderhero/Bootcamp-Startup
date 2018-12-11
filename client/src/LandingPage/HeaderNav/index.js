// code snippet imported from the ant design
import React from 'react';
import { Row, Col, Nav } from 'antd';
import UserNav from './UserNav';
import logo from '../../images/logo.jpg'
import LoginRegisterModal from './UserNav/LoginRegisterModal'
export default class HeaderNav extends React.Component {
  constructor(props) {
        super(props);
        this.state = {
            hasLogined: false, // to show if Login
            userName: '', //to show username
            userId: '',   //to show id
            current: 'top',//to show the current clicked nav
            modalVisable: false, //indicate if the login/register component needs to show
        };
    }
    //before mount, checkout localstorage
    //set login status to be true
    //show logout component
  componentWillMount() {
        //to show if user existed
    if (localStorage.token && localStorage.token != '') {
        this.setState({
            token: localStorage.token,
            auth_level: localStorage.authLevel,
            hasLogined: true
          });
      }
    }
  MenuItemClick(e) {
            //when the login/register MenuItem clicked，set current value，
            //  to show the modal
            if (e.key === 'register') {
                //highlight the menu
                this.setState({current: 'register'});
                //to show the modal
                this.setModalVisible(true);
            } else {
                this.setState({current: e.key});
            }
        }
        //set if the login/register modal to show
        //default state of modal is invisible
    setModalVisible(value) {
            this.setState({modalVisable: value});
        }

    // add modal inside of return
  logout() {
        localStorage.userName = '';
        localStorage.userId = '';
        this.setState({
          hasLogined: false,
          userName: ''
          });
        }
  login() {

  }
render() {
  return (
    <header>
      <Row>
        <Col span={2}></Col>
        <Col span={4}>
            <a className='logo' href='/'>
            <img src={logo} alt='logo'/>
            <span>About Us</span>
            </a>
          </Col>
        <Col span={18}>
        <UserNav hasLogined={this.state.hasLogined}
             logout={this.logout.bind(this)}
             userName={this.state.userName}
             current={this.state.current}
             menuItemClick={this.MenuItemClick.bind(this)}
             />
         <LoginRegisterModal
             setModalVisible={this.setModalVisible.bind(this)}
             login={this.login.bind(this)}
             visible={this.state.modalVisable}
             />
          </Col>
        </Row>

      </header>
        );
      }
    }
