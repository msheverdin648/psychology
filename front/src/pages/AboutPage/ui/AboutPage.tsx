import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AboutPage.module.scss';
import Avatar from 'shared/assets/img/avatar.png'
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useNavigate } from 'react-router-dom';

interface AboutPageProps {
    className?: string;
}

export const AboutPage: React.FC<AboutPageProps> = (props) => {
    const { className } = props;

    const navigate = useNavigate()
    

    return (
        <div className={classNames(cls.aboutPage, {}, [className ?? '' ])}>
            <div className="container">
                <div className={cls.content}>
                    <div className={cls.block}>
                        <img src={Avatar} alt="" className={cls.img} />
                        <span className={cls.name}>Людмила Николаева</span>
                        <span className={cls.position}>Психоаналитически<br/>ориентированный<br/>психотерапевт</span>
                        <Button theme={ButtonTheme.BLUE} onClick={()=>{navigate('/#appointment')}} >Записаться на консультацию</Button>
                    </div>
                    <div className={classNames(cls.block, {}, [cls.secondBlock])}>
                        <p className={cls.description}>
                        &nbsp;&nbsp;&nbsp;Людмила Юрьевна - выдающийся специалист в области профессиональной психотерапии, обладающий богатым опытом работы с людьми, столкнувшимися с эмоциональными и психологическими трудностями. Она специализируется на психоанализе и психоаналитической психотерапии, двух тесно связанных областях, которые позволяют ей глубоко проникнуть в суть проблем своих клиентов и помочь им понять и преодолеть такие сложные эмоциональные состояния, как депрессия, тревога, страхи, навязчивые мысли и другие. Эти методы лечения основаны на длительных и плодотворных процессах самопознания и самореализации, что способствует укреплению личности и улучшению психологического благополучия клиентов.
                        </p>
                        <p className={cls.description}>
                        &nbsp;&nbsp;&nbsp;В своей практике Людмила Юрьевна активно использует индивидуальный подход к каждому клиенту, учитывая их уникальные особенности и потребности. Благодаря своему профессиональному коучингу ICU, она может работать с клиентами на разных уровнях, включая управление мыслями и эмоциями, развитие личных и профессиональных навыков, а также достижение поставленных целей.</p>
                        <p className={cls.description}>
                        &nbsp;&nbsp;&nbsp;Людмила Юрьевна начала свой профессиональный путь с обучения в МИМ ЛИНК, где она получила степень Мастера делового администрирования. Это свидетельствует о ее серьезном подходе к работе и глубоких знаниях в области бизнеса.</p>
                        <p className={cls.description}>
                        &nbsp;&nbsp;&nbsp;Людмила Юрьевна убеждена в том, что ее работа обладает значительной социальной значимостью и призвана помочь людям в их личном росте и развитии. Это не просто профессия для нее, а скорее миссия, направленная на улучшение качества жизни окружающих. Каждый клиент для нее - это новая возможность внести свой вклад в общее благо, и она делает все возможное, чтобы помочь им в их стремлении к саморазвитию.</p>
                    </div>

                </div>
            </div>
        </div>
    );
}