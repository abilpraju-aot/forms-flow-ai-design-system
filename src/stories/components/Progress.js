
export const createProgressBar = ({
    //size = 'forms-flow-btn-md',
    type = 'forms-flow-progress',
    width = 25,
    height = 20,
    label,
  }) => {
    const pbroutside = document.createElement('div');
    const pbrinside = document.createElement('div');
    pbroutside.className = 'forms-flow-progress';
    pbrinside.className = ['forms-flow-progress-bar',type].join(' ');
    pbrinside.style.width= width+'%';
    pbroutside.style.height=height+'px';
    pbrinside.innerHTML=label
    pbroutside.append(pbrinside)
    return pbroutside;
  };
  