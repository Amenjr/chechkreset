import React from 'react'
import { Card } from 'antd';

import { useDispatch } from 'react-redux';
import { deletemovie, getOneMovie } from '../redux/actions/Filmaction';
import { Link, useNavigate } from 'react-router-dom';
import { Rate } from 'antd';
import { EditOutlined, DeleteOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

function MovieCard({Movie}) {
  const dispatch = useDispatch();
  const Navigate= useNavigate();
  
    return (
      <Card
      style={{ width: 300 , height:'400px',margin:'5px' }}
      cover={
        <img
          alt="example"
          src={Movie.photo}
          style={{height:'300px'}}
        />
      }
      actions={[
      <Link to={`/Movies/${Movie._id}`}> <SettingOutlined key="setting" onClick={()=>dispatch(getOneMovie(Movie._id))} /></Link>,
        <EditOutlined key="edit" />,
        <DeleteOutlined key="delete" onClick={()=>dispatch(deletemovie(Movie._id,Navigate))}/>,
      ]}
    >
      <Meta
        
        title={Movie.titre}
        description={<Rate allowHalf defaultValue={Movie.rate} />}
      />
    </Card>
    )
}

export default MovieCard;
