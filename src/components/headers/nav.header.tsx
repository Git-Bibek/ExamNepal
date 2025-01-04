import logo from './../../assets/logo.png'
import {NavLink} from "react-router-dom";


const NavHeader = () => {
    const navItems = [
        {title: 'Find MCQs', link: '/find-mcq'},
        {title: 'Blog', link: '/blog'},
        {title: 'Lok Sewa Notice Board', link: '/notice-board'},
        {title: 'Join as Teacher', link: '/register'},
        {title: 'Join as Student', link: '/register'},
    ]
    return (
        <>
            <div>
                <div className="bg-white px-10 md:px-20 py-3 flex justify-between items-center">
                    <img src={logo} alt="" className={' w-[150px] '}/>
                    <div className={' flex items-center '}>
                        {
                            navItems && navItems.map((item, index) => {
                                return (
                                    <div key={index} className={'inline-block mx-2'}>
                                        <NavLink to={item.link} className={'text-gray-600 hover:text-gray-900'}>
                                            {item.title}
                                        </NavLink>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
export default NavHeader