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

function TabToggle(){

  return( 
    <Tabs className="tabs">
      <TabTitle>Daily</TabTitle>
      <TabList className="tab-list">      
        <Tab className="tab">Food</Tab>
        <Tab className="tab">Travel</Tab>
        <Tab className="tab">Health</Tab>
        <Tab className="tab">Insider</Tab>
      </TabList>

      <TabPanel className="tab-panel">
        <Panel section="food"/>
      </TabPanel>
      <TabPanel className="tab-panel">
        <Panel section="travel"/>
      </TabPanel>
      <TabPanel className="tab-panel">
        <Panel section="health"/>
      </TabPanel>
      <TabPanel className="tab-panel">
        <Panel section="insider"/>
      </TabPanel>
    </Tabs>
  )
}

export default TabToggle