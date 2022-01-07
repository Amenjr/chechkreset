import { Layout, Menu } from 'antd';
import {useDispatch} from 'react-redux'
import { getMovies } from '../redux/actions/Filmaction';
import{Link, Routes,Route} from 'react-router-dom'
import { useState } from 'react';

import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  
} from '@ant-design/icons';
import React from 'react'
import MovieList from './MovieList';
import AddMovie from './AddMovie';
import MovieDetails from './MovieDetails';



const {  Sider } = Layout;
const { SubMenu } = Menu;

function Home() {
 /* state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };*/
const [collapsed, setState] = useState(false);
const onCollapse=(collapsed)=>{
  setState({collapsed});
}
   
  

const dispatch = useDispatch();
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              <Link to='/'>
              Home
              </Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
            <Link to='/Add'>
              Add
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Watch">
              <Menu.Item key="6"  onClick={()=>dispatch(getMovies())}><Link to='/Movies'>Movies</Link></Menu.Item>
              <Menu.Item key="7">Series</Menu.Item>
              <Menu.Item key="8">Anime</Menu.Item>
              
            </SubMenu>
            <Menu.Item key="9" icon={<FileOutlined />}>
              file
            </Menu.Item>
          </Menu>
        </Sider>
        <Routes>
        <Route path='/Movies' element={<MovieList></MovieList>} />
        <Route path='/Add' element={<AddMovie></AddMovie>} />
        <Route path='/Movies/:id' element={<MovieDetails></MovieDetails>}/>
        </Routes>
        
      </Layout>
    );
  
}

export default Home;