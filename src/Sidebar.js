// React icons let you use icons from popular icon packs like Font Awesome, Material Design, and more as React components.
import {BsPlus, BsFillLightningFill, BsFillGearFill} from 'react-icons/bs';
import {FaFire, FaPoop} from 'react-icons/fa';

const SideBar = () => {
    return (
        <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col shadow bg-primary">
            <SideBarIcon icon={<FaFire size="28"/>} />
            <SideBarIcon icon={<BsPlus size="32"/>} />
            <SideBarIcon icon={<BsFillLightningFill size="20"/>} />
            <SideBarIcon icon={<FaPoop size="20"/>} />
        </div>
    )
};

const SideBarIcon = ({icon, text = "tooltip 💡"}) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">
            {text}
        </span>
    </div>
)

export default SideBar;