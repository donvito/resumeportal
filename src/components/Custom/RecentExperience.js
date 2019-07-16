import React from 'react';
import 'antd/dist/antd.css';
import { Timeline, Tag, Typography } from 'antd';

const { Title } = Typography;

class RecentExperience extends React.Component {
  render() {
    
    return (
      <div>
        <Title level={3}>Recent Experience</Title><br />
        <Timeline>
          <Timeline.Item><Title level={4}>Senior Software Engineer @ My Startup (May 2019 - Present)</Title><br/>
              <Tag color="blue">Go</Tag>
              <Tag color="cyan">React</Tag>
              <Tag color="blue">Docker</Tag>   
              <Tag color="volcano">Kubernetes</Tag>  
              <Tag color="purple">GraphQL</Tag>
              <Tag color="blue">Google Cloud</Tag>
              <Tag color="yellow">AWS</Tag>        
          </Timeline.Item>
          <Timeline.Item><Title level={4}>Software Engineering Manager @ Standard Chartered Bank (March 2016 - May 2019, 3 years)</Title><br/>
              <Tag color="magenta">Java</Tag>
              <Tag color="green">Spring Boot</Tag>
              <Tag color="blue">Docker</Tag>        
              <Tag color="red">Oracle</Tag>
              <Tag color="purple">Scrum</Tag>       
              <Tag color="volcano">Kubernetes</Tag>
          </Timeline.Item>
          <Timeline.Item><Title level={4}>Senior Software Engineer @ Intrax Pte Ltd (Sep 2014 - Feb 2016, 1.5 years)</Title><br/>
              <Tag color="magenta">Java</Tag>
              <Tag color="volcano">PostgreSQL</Tag>
              <Tag color="yellow">AWS</Tag>
          </Timeline.Item>
        </Timeline>      
      </div>
    );
  }
}

export default RecentExperience