
import './App.css';
import React,{useEffect, useState} from 'react'
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb} from 'antd';
import { Card ,Avatar} from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import { Form, Input, Button, Checkbox ,Tooltip} from 'antd';
import { Image } from 'antd';
import {
  LikeOutlined,CommentOutlined ,SmileOutlined,HomeOutlined ,NotificationOutlined ,BellOutlined ,MailOutlined ,DislikeFilled,LikeFilled,DislikeOutlined,MessageOutlined

} from '@ant-design/icons';
// import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import Icon from '@ant-design/icons';
import { Divider } from 'antd';
// import { Card,  } from 'antd';
// import { , Button, Divider } from 'antd';

const text = <span>prompt text</span>;

const buttonWidth = 70;

const { Header, Content, Footer } = Layout;
const { Meta } = Card;

const PandaSvg = () => (
    <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M99.096 315.634s-82.58-64.032-82.58-132.13c0-66.064 33.032-165.162 148.646-148.646 83.37 11.91 99.096 165.162 99.096 165.162l-165.162 115.614zM924.906 315.634s82.58-64.032 82.58-132.13c0-66.064-33.032-165.162-148.646-148.646-83.37 11.91-99.096 165.162-99.096 165.162l165.162 115.614z"
      fill="#6B676E"
      p-id="1143"
    />
    <path
      d="M1024 561.548c0 264.526-229.23 429.42-512.002 429.42S0 826.076 0 561.548 283.96 66.064 512.002 66.064 1024 297.022 1024 561.548z"
      fill="#FFEBD2"
      p-id="1144"
    />
    <path
      d="M330.324 842.126c0 82.096 81.34 148.646 181.678 148.646s181.678-66.55 181.678-148.646H330.324z"
      fill="#E9D7C3"
      p-id="1145"
    />
    <path
      d="M644.13 611.098C594.582 528.516 561.55 512 512.002 512c-49.548 0-82.58 16.516-132.13 99.096-42.488 70.814-78.73 211.264-49.548 247.742 66.064 82.58 165.162 33.032 181.678 33.032 16.516 0 115.614 49.548 181.678-33.032 29.18-36.476-7.064-176.93-49.55-247.74z"
      fill="#FFFFFF"
      p-id="1146"
    />
    <path
      d="M611.098 495.484c0-45.608 36.974-82.58 82.58-82.58 49.548 0 198.194 99.098 198.194 165.162s-79.934 144.904-148.646 99.096c-49.548-33.032-132.128-148.646-132.128-181.678zM412.904 495.484c0-45.608-36.974-82.58-82.58-82.58-49.548 0-198.194 99.098-198.194 165.162s79.934 144.904 148.646 99.096c49.548-33.032 132.128-148.646 132.128-181.678z"
      fill="#6B676E"
      p-id="1147"
    />
    <path
      d="M512.002 726.622c-30.06 0-115.614 5.668-115.614 33.032 0 49.638 105.484 85.24 115.614 82.58 10.128 2.66 115.614-32.944 115.614-82.58-0.002-27.366-85.556-33.032-115.614-33.032z"
      fill="#464655"
      p-id="1148"
    />
    <path
      d="M330.324 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1149"
    />
    <path
      d="M693.678 495.484m-33.032 0a33.032 33.032 0 1 0 66.064 0 33.032 33.032 0 1 0-66.064 0Z"
      fill="#464655"
      p-id="1150"
    />
  </svg>
);


//for tooltip hover color
const colors = [
  'pink',
  'red',
  'yellow',
  'orange',
  'cyan',
  'green',
  'blue',
  'purple',
  'geekblue',
  'magenta',
  'volcano',
  'gold',
  'lime',
];


function App1() {


    ///objects

    const objects1 = [
       {
          id: 1,
          
          logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
      
          quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",
          avatar:"https://joeschmoe.io/api/v1/random",
      title:"hellow welcome here"
        },
      ]

      const objects2=[
        {
           id: 2,
           
           logo: "https://i.pinimg.com/originals/61/63/06/6163060a0048b875d224ccbf806b9cba.jpg",
       
           quotes:"ife is a beautiful journey that is meant to be embraced to the fullest every day. However, that doesn’t mean",
           avatar:"https://joeschmoe.io/api/v1/random",
       title:"hellow welcome two"
         },
       ]

       const objects3=[

        {
            id: 3,
            
            logo: "https://editaphotography.in/wp-content/uploads/2020/09/Baby_photo_shoot_baby_girl_Edita_photography_Pune_006-thegem-gallery-masonry.jpg",
        
            quotes:"“You only live once, but if you do it right, once is enough.”",
            avatar:"https://joeschmoe.io/api/v1/random",
        title:"hellow welcome three"
          },

       ]
       const object4=[
           {
            id: 3,
            
            logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJZ6WjUomHM67NhIP3vEVmEH-M-3B6x_jWFg&usqp=CAU",
        
            quotes:"“Many of life’s failures are people who did not realize how close they were to success when they gave up.”",
            avatar:"https://joeschmoe.io/api/v1/random",
        title:"hellow welcome four"
           }
       ]
       const object5=[
        {
         id: 3,
         
         logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
     
         quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly.",
         avatar:"https://joeschmoe.io/api/v1/random",
     title:"hellow welcome here"
        }
    ]

  const PandaIcon = props => <Icon component={PandaSvg} {...props} />;

      return (
    
      <Layout>
    <Header style={{ position: 'fixed',  width: '100%' }}>
      <div className="logo" />
      <Menu theme="light" style={{backgroundColor:'white',width:1400}} mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home  <HomeOutlined />  </Menu.Item>
        <Menu.Item key="2">Notification  <BellOutlined /></Menu.Item>
        <Menu.Item key="3">Messages <MessageOutlined /> </Menu.Item>
        <Menu.Item  style={{paddingLeft:400,}}>     <Input /> </Menu.Item>


        <Menu.Item  style={{paddingLeft:20,}}>  
        
        
        
        {
    
    <Tooltip placement="topLeft" title="its me user">
  <PandaIcon style={{ fontSize: '20px' }}/>
   </Tooltip>
 
 }     </Menu.Item>


        <Menu.Item className="modified-item" style={{paddingLeft:90,}}><Button danger>add</Button>   </Menu.Item>
        
      
      
      </Menu>
      {/* <Button type="primary" dange style={{ paddingLeft:500,paddingTop:150 }}> post </Button> */}
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,alignContent:'center',textAlign: 'center',paddingLeft:500 }}>
      
      <div className="site-layout-background" style={{ padding: 24, minHeight: 200 }}>
      <Card bordered={false} style={{ width: 500 ,alignContent:'center'}}>
      
      <p>
      <Form>
      <Input name="name" placeholder="what is in your mind?"  /><br/>   
       
      <Button type="primary">Post</Button>
      {/* onClick={handlesubmit, handelTime} */}
</Form>
      </p>

   
    </Card>
    <br/>

{objects1.map((a)=>{
    
return (
    <>
<br/>
    <br/>
<Card
    style={{ width: 500 }}
    cover={
        <Image
                                         
        width={500}
        src={a.logo}
      />
      
    }
    actions={[
        <LikeOutlined/>,
        <CommentOutlined />
    ]}
  >
    <Meta
      avatar={
    
       <Tooltip placement="topLeft" title={a.title}>
      <Avatar src={a.avatar} />
      </Tooltip>
    
    }
      title={a.title}

     

      description={a.quotes}
    />
  </Card>

    </>
)

    
})}
                                                                  
  
  
{objects2.map((a)=>{         //need  must need to put <>  </>
    
    return (
        <>
    <br/>
    <br/>
    <Card
        style={{ width: 500 }}
        cover={
            <Image
                                             
            width={500}
            src={a.logo}
          />
          
        }
        actions={[
            <LikeOutlined/>,
            <CommentOutlined />
        ]}
      >
        <Meta
          avatar={
    
            <Tooltip placement="topLeft" title={a.title}>
           <Avatar src={a.avatar} />
           </Tooltip>
         
         }
          title={a.title}
          description={a.quotes}
        />
      </Card>
    
        </>
    )
    
        
    })}

    
{objects3.map((a)=>{
    
    return (
        <>
    <br/>
    <br/>
    <Card
        style={{ width: 500 }}
        
        cover={
            // < Meta
            
            // title={a.title}
            // description={a.quotes}
            // />
            
            <Image
                                             
            width={500}
            src={a.logo}
          />
          
        }
        actions=
        
        // {colors.map(color => (
        //     <Tooltip title="prompt text" color={color} key={color}>
        //       <Button>{color}</Button> ,
        //     </Tooltip>
        //   ))}
        
        
        {[
            <LikeOutlined/>,
           
            <CommentOutlined />
        ]}
      >
        <Meta
         avatar={
    
            <Tooltip placement="topLeft" title={a.title}>
           <Avatar src={a.avatar} />
           </Tooltip>
         
         }
          title={a.title}
          description={a.quotes}
        />
      </Card>
    
        </>
    )
    
        
    })}
    {objects3.map((a)=>{
    
    return (
        <>
    {/* <h1>{a.title}</h1> */}

    <br/>
    <br/>
    <Card
    // <p>{a.title}</p>
    
        style={{ width: 500 }}


        
        cover={
            
            <Image
                                             
            width={500}
            src={a.logo}
          />
          
          
        }
        actions={[
            <LikeOutlined/>,
            <CommentOutlined />
        ]}
      >
        <Meta
          avatar={
    
            <Tooltip placement="topLeft" title={a.title}>
           <Avatar src={a.avatar} />
           </Tooltip>
         
         }
          title={a.title}
          description={a.quotes}
        />
      </Card>
    
        </>
    )
    
        
    })}
    {object4.map((a)=>{
    
    return (
        <>
    <br/>
    <br/>
    <Card
        style={{ width: 500 }}
        cover={
            <Image
                                             
            width={500}
            src={a.logo}
          />
          
        }
        actions={[
            <LikeOutlined/>,
            <CommentOutlined />
        ]}
      >
        <Meta
         avatar={
    
            <Tooltip placement="topLeft" title={a.title}>
           <Avatar src={a.avatar} />
           </Tooltip>
         
         }
          title={a.title}
          description={a.quotes}
        />
      </Card>
    
        </>
    )
    
        
    })}
{/*                          
    <Card
    style={{ width: 500 }}
    cover={
        <Image
        width={500}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    }
    actions={[
        <LikeOutlined/>,
        <CommentOutlined />
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="WELCOME"
      description="This is the description"
    />
  </Card>





  <br/>
  <Card
    style={{ width: 500 }}
    cover={
        <Image
        width={500}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    }
    actions={[
        <LikeOutlined/>,
        <CommentOutlined />
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="WELCOME"
      description="This is the description"
    />
  </Card>
  <br/>
  <Card
    style={{ width: 500 }}
    cover={
        <Image
        width={500}
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
      />
    }
    actions={[
        <LikeOutlined/>,
        <CommentOutlined />
    ]}
  >
    <Meta
      avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
      title="WELCOME"
      description="This is the description"
    />
  </Card> */}



   


      </div>
    
    </Content>
    <Footer style={{ textAlign: 'center' }}>Copyright@AssignmentFour</Footer>
  </Layout>


       
       //  {companyData.map((data, key) => {
       //   return (
       //     <div>
       //      
       //       </div>
       //   )}
         );     
       
       }
       
       
       export default App1;
       