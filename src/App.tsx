import React from 'react';
import Tree from './components/Tree'
import './App.css';

const treeData = [
  {
    label: 'Animals',
    subTree: [
      {
        label: 'Birds',
        subTree: []
      },
      {
        label: 'Mammals',
        subTree: [
          {
            label: 'Elephant',
            subTree: []
          },
          {
            label: 'Dolphin',
            subTree: [
              {
                label: 'Chicken',
                subTree: [
                  {
                    label: 'Dog',
                    subTree: []
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        label: 'Reptiles',
        subTree: []
      }
    ]
  },
  {
    label: 'Plants',
    subTree: [
      {
        label: 'Flowers',
        subTree: [
          {
            label: 'Rose',
            subTree: []
          },
          {
            label: 'Tulip',
            subTree: []
          }
        ]
      },
      {
        label: 'Trees',
        subTree: []
      }
    ]
  }
]

function App() {
  return (
    <div className="App">
      {
        treeData.map((each, index) => {
          return <Tree data={each} key={index}/>
        })
      } 
    </div>
  );
}

export default App;
