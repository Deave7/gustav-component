import './App.scss';
import Accordion from './components/Accordion/Accordion';
import ListBox from './components/ListBox/ListBox';
import { Spinner } from './components/Spinner/Spinner';
function App() {
   const listItems: string[] = ['Robert', 'Adam', 'Eva', 'Hans', 'Ettjättelångtnamnsåattdetkanskeblirlitecooltochsåntvetinte'];

   return (
      <>
         <ListBox
            listItems={listItems}
            dropdownLabel="ListBox 1"
            dropdownPlaceholder="Pick a name"
            multipleList={true}
            multipleListSize={10}
            inlineDropdown={false}
            boxBorder={true}
            borderSizeInPixels={1}
         />
         <Accordion title={'test-123'} content={'hello'} theme={'dark'} />
         <Spinner color="red"></Spinner>
      </>
   );
}

export default App;
