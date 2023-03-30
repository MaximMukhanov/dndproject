import './App.css'
import Content from './components/content/Content';
import Header from './components/header/header'

function App() {
const labelsAndInputs = [
    {
      label: 'Enter damage formula:',
      input: 'Advantage',
      name: 'damage',
      pattern: '^[ dD0-9+-]*$',
      tooltip: 'Damage formula: 2d8+1d6+7...',
    },
    {
      label: 'Enter enemy AC:',
      input: 'Normal attack',
      name: 'enemyAc',
      checked: 'checked',
      pattern: '^[-+0-9]*$',
      tooltip: 'Only number allowed',
    },
    {
      label: 'Enter attack modificator:',
      input: 'Disadvantage',
      name: 'AttackModificator',
      pattern: '^[-+0-9]*$',
      tooltip: 'Only number allowed',
    },
    {
      label: 'Enter number of attacks:',
      name: 'numberOfAttacks',
      pattern: '^[-+0-9]*$',
      tooltip: 'Only number allowed',
    },
  ];
  return (<>
      <Header></Header>
      <Content labelsAndInputs={labelsAndInputs}></Content>
      </>
 )     
}

export default App
