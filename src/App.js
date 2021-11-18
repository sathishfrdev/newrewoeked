import logo from './logo.svg';

import './App.css';
import React,{useEffect, useState} from 'react'
// import { DatePicker } from 'antd';
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { Card } from 'antd';
import { Form, Input, Button, Checkbox } from 'antd';
import { Image } from 'antd';
import {
  LikeOutlined,CommentOutlined ,SmileOutlined,HomeOutlined ,NotificationOutlined ,BellOutlined ,MailOutlined ,DislikeFilled,LikeFilled,DislikeOutlined
} from '@ant-design/icons';
// import Icon from '@ant-design/icons';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
// import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;



// function Sample(){

// useEffect(()=>{
//   console.log("useefect worked")
//   return()=>{
//     <p className="sathish">sathish</p>
// console.log("useeffect ")
//   };
// });
// return 'Sample'
// }

// componentDidMount() {
//   ChatAPI.subscribeToFriendStatus(
//     this.props.friend.id,
//     this.handleStatusChange
//   );
// }
// }


// eslint-disable-next-line react-hooks/rules-of-hooks




function App() {

// const[show,setShow]=useState(10);

// const[show2,setShow2]=useState(10);
// const[less,setLess]=useState(20);


// useEffect(()=>{
//   console.log("useeffecct show",show)
// //  console.log("useefffect show2",show2)
// setShow2(show*2)
// },[show])// did mount
// const[show,setShow]=useState(true);

// const [seconds, setSeconds] = useState(0);  //for loading ui or feed


// useEffect(() => {
//   const interval = setInterval(() => {
//     setSeconds(seconds => seconds - 1);
//   }, 1000);
//   return () => clearInterval(interval);
// }, []);

const objects = [
  {
    id: 1,
    
    logo: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",

    quotes:"Just when the caterpillar thought the world was ending, he turned into a butterfly."

  }
]

//variable for date and month
const time = null;
const [datem,setDate] = useState(time);

//variable for like counter
const [count, setCount] = useState(0);


//increment function

const handleIncrement = () => {
  setCount(prevCount => prevCount + 1);
};

//time function                   //learn moment
const handelTime = () =>{
  let in_date  = new Date()
  var str=in_date.getDate() +'/'+(in_date.getMonth()+1).toLocaleString('en-us', { month: 'long' });  //string convert the month
  
  setDate(str);
  console.log("time",datem)
}


//post and feed variable

const[name,setName]=useState("")
const [list,setList]=useState([])


//function form
const handlesubmit=(e)=>{
  // e.preventDefault();
 //  console.log(name,mail)
 console.log("am working")
  const data={name}
  if(name){
    setList((ls)=>[...ls,data])
    setName("")
  }
//  console.log("clicked")
}


  return (
 <div>
<Layout className="layout">
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%',color:'white' }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" style={{color:'white'}} defaultSelectedKeys={['2'] }>
        <Menu.Item key="1" > <HomeOutlined />        Home             </Menu.Item>
        <Menu.Item key="2"><BellOutlined />  Notification</Menu.Item>
        <Menu.Item key="3"><MailOutlined />    Messages</Menu.Item>
        
        <Button type="primary" danger>
      
      </Button> 
      </Menu>
      
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64,marginLeft:500,marginRight:280 }}>
      
      <div className="site-layout-background" style={{ padding: 24, minHeight: 380 ,width:800,}}>
      <div className="site-card-border-less-wrapper">
    <Card title="POST IT RIGHT NOW..HERE" bordered={false} style={{ width: 500 ,alignItems:'center'}}>
      
      <p>
      <Form onSubmit={handlesubmit}>
      <Input name="name" placeholder="what is in your mind?" value={name} onChange={(e)=>setName(e?.target?.value)} />
      <Button type="primary" onClick={() => { handlesubmit(); handelTime();}}>Post</Button>
      {/* onClick={handlesubmit, handelTime} */}
</Form>
      </p>

   
    </Card>

    
       
            
                       
                      
    
    {/* <div id="display"></div> */}
   

  </div>
  
  
  
  {
    list.map((a)=><Card  title={a.name}   style={{ width: 500 ,alignItems:'center',marginTop:20}}>   
    <p>
      {datem}
      </p>
      <p>

     

<br/><br/>

{/* <p>"Just when the caterpillar thought the world was ending, he turned into a butterfly."</p> */}

      </p>
      {objects.map((data,key)=>{
                            ///images mapped from json                   //to get the post stored in array object and displayed through mapping that array fro feed
        //
return(                                                                 //need  must need to put <>  </>
  
<>                               
<Image                                 
      width={200}
      src={data.logo}
    />
    
<p>{data.quotes}</p>
</>
)

})}
      <div className="icons-list"> <br/><br/>
       <LikeOutlined onClick={handleIncrement}/> {count}              <CommentOutlined /></div>
      </Card>  )
  }


      </div>
      {/* {seconds} */}
    </Content>
    
    <Footer style={{ textAlign: 'center' }}>copyright@assignmentFOUR</Footer>
    
  </Layout>




 </div>
//  {companyData.map((data, key) => {
//   return (
//     <div>
//      
//       </div>
//   )}
  );     

}


export default App;
