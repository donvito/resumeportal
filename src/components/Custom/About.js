import React from 'react';
import 'antd/dist/antd.css';
import { Typography } from 'antd';

const { Title } = Typography;

class About extends React.Component {
  render() {
    
    return (
      <div>
        <Title level={3}>About Me</Title>
        I have been working as an IT professional for 19 years. 
        I have been able to work as a Software Developer, Team Lead, Technical Manager, and Scrum Master in startups, medium-sized companies and large companies. <br/><br/>
        I am currently unemployed and keeping myself up to date and learning Go, React, GraphQL, and Kubernetes. Apart from tinkering with these technologies, I also plan to contribute to open source and develop some of my startup ideas. 
      </div>
    );
  }
}

export default About