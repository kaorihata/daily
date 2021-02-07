import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from '@emotion/styled'
import './Tabs.css'
import NewsContent from './NewsContent'

/* 
  * Style
*/
const TabTitle = styled.h1`
  font-size: 4rem;
  font-weight: 300;
`
const PanelList = styled.div`
  padding: 1rem;
`

export default function NewsList(){

  return( 
    <Tabs className="tabs">
      <TabTitle>Daily</TabTitle>   
      <TabList className="tab-list">    
        <Tab className="tab">Food</Tab>
        <Tab className="tab">Travel</Tab>
        <Tab className="tab">Health</Tab>
        <Tab className="tab">Insider</Tab>
        <div className="line"></div>
      </TabList>
      <PanelList>
        <TabPanel>
          <NewsContent topic="food"/>
        </TabPanel>
        <TabPanel>
          <NewsContent topic="travel"/>
        </TabPanel>
        <TabPanel>
          <NewsContent topic="health"/>
        </TabPanel>
        <TabPanel>
          <NewsContent topic="insider"/>
        </TabPanel>
      </PanelList>
    </Tabs>
  )
}
