import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Switch,
} from 'antd';
import { useDispatch } from 'react-redux';
import { addmovie } from '../redux/actions/Filmaction';
import { Link, useNavigate } from 'react-router-dom';

const AddMovie = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
 
  const [titre,setTitre]=useState('');
  const [desc,setDesc]=useState('');
  const [photo,setphoto]=useState('');
  const [trailer,setTrailer]=useState('');

  const [rate,setRate]=useState('');
  const dispatch = useDispatch();
  const Navigate= useNavigate()

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{width:'500px',marginTop:'10px'}}
    >
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Titre">
        <Input onChange={(e)=>setTitre(e.target.value)} value={titre} />
      </Form.Item>
      <Form.Item label="desc">
        <Input onChange={(e)=>setDesc(e.target.value)} value={desc} />
      </Form.Item>
      <Form.Item label="photo">
        <Input onChange={(e)=>setphoto(e.target.value)} value={photo} />
      </Form.Item>
      <Form.Item label="trailer">
        <Input onChange={(e)=>setTrailer(e.target.value)} value={trailer} />
      </Form.Item>
      
      <Form.Item label="rate">
        <Input onChange={(e)=>setRate(e.target.value)} value={rate} />
      </Form.Item>
      <Form.Item label="Switch" valuePropName="checked">
        <Switch />
      </Form.Item>
      <Form.Item label="Button">
 <Button onClick={(e)=>{e.preventDefault();dispatch(addmovie({titre,desc,photo,trailer,rate}, Navigate))}}>AddMovie</Button>
      </Form.Item>
    </Form>
  );
};

export default AddMovie;