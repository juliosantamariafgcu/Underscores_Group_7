'use client'
import {
  Week, Agenda, ScheduleComponent, ViewsDirective, ViewDirective, EventSettingsModel, ResourcesDirective, ResourceDirective, Inject, Resize, DragAndDrop
} from '@syncfusion/ej2-react-schedule';
import { timelineResourceData } from './datasource';

export default function Page() {
  const eventSettings: EventSettingsModel = { dataSource: timelineResourceData }
  const group = { byGroupID: false, resources: ['Projects', 'Categories'] }

  const projectData: Object[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' },
  ];
  const categoryData: Object[] = [
    { text: 'Development', id: 1, color: '#1aaa55' },
    { text: 'Testing', id: 2, color: '#7fa900' }
  ];
  return (
    <>
      <h2>Schedule</h2>
      <ScheduleComponent width='100%' height='550px' currentView='Week' selectedDate={new Date(2024, 3, 5)} eventSettings={eventSettings} group={group} >
        <ViewsDirective>
          <ViewDirective option='Week' />
          <ViewDirective option='Agenda' />
        </ViewsDirective>
        <ResourcesDirective>
          <ResourceDirective field='ProjectId' title='Choose Project' name='Projects' allowMultiple={false}
                             dataSource={projectData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
          <ResourceDirective field='TaskId' title='Category' name='Categories' allowMultiple={true}
                             dataSource={categoryData} textField='text' idField='id' colorField='color'>
          </ResourceDirective>
        </ResourcesDirective>
        <Inject services={[Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </>
  )
}
