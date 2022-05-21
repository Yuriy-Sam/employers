
import './app-info.css';


const AppInfo = ({employers, increases}) => {
    return (
        <div className="app-info">
            <h1>Учет сотрудников в компании N </h1>
            <h2>Общее число сотрудников: {employers}</h2>
            <h2>Прению получат: {increases}</h2>
        </div>
    )
}

export default AppInfo;