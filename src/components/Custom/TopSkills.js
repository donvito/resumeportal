import React from 'react';
import 'antd/dist/antd.css';
import { Tag, Typography } from 'antd';

const { Title } = Typography;

class TopSkills extends React.Component {
  render() {
    
    return (
      <div>
        <Title level={3}>Top Skills</Title><br />
        <Tag color="magenta">Java</Tag>
        <Tag color="green">Spring Boot</Tag>
        <Tag color="blue">Docker</Tag>
        <Tag color="red">Oracle</Tag>
        <Tag color="yellow">AWS</Tag>        
        <Tag color="blue">Go</Tag>
        <Tag color="purple">Scrum</Tag>        
        <Tag color="cyan">React</Tag>
        <Tag color="volcano">Kubernetes</Tag>  
        <Tag color="purple">GraphQL</Tag>  
      </div>
    );
  }
}

export default TopSkills