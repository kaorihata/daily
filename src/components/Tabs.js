import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import styled from '@emotion/styled'
import './Tabs.css'
import Panel from './Panels'

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

function TabToggle(){

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
          <Panel section="food"/>
        </TabPanel>
        <TabPanel>
          <Panel section="travel"/>
        </TabPanel>
        <TabPanel>
          <Panel section="health"/>
        </TabPanel>
        <TabPanel>
          <Panel section="insider"/>
        </TabPanel>
      </PanelList>
    </Tabs>
  )
}

export default TabToggle