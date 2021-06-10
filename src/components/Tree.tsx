import React from 'react';

type TreeDataProps = {
    label: string,
    subTree: TreeDataProps[]
}

type TreeProps = {
    data: TreeDataProps
};

const Tree:React.FC<TreeProps> = ({ data }) => {
  const subTreeBuilder = (subTreeData: TreeDataProps[]) => {
    return subTreeData.map((item:TreeDataProps, index) => {
      return (
        <>
          <li key={index}>{item.label}
            {
              item.subTree.length ? (
                <ul>
                  {subTreeBuilder(item.subTree)}
                </ul>
              ) : null
            }
          </li>
        </>
      )
    })
  }

  return (
    <ul className='tree'>
      <img src='/icons/folder.png' className={'imgSize imgSpacer'} alt={''} />
      {data.label}
      {
        subTreeBuilder(data.subTree)
      }
    </ul>
  )
}

export default Tree;
