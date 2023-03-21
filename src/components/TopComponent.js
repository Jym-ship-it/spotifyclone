import React from 'react'
import '../Css/TopComponentsStyle.css'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';

export default function TopComponent() {
  return (
    <div className='iconContainer'>
        <div className='iconSubCon'>
            <button><HomeIcon style={{fontSize : "28px" , marginRight : "20px"}}/>Home</button>
            <button><SearchIcon style={{fontSize : "28px" , marginRight : "20px"}}/>Search</button>
        </div>
    </div>
  )
}
