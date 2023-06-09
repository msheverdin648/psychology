import { classNames } from 'shared/lib/classNames/classNames';
import { CustomLink } from 'shared/ui/Link/CustomLink';
import cls from './Navigate.module.scss';
import { Header } from 'widgets/Header';

interface NavigateProps {
    className?: string;
}

export const Navigate: React.FC<NavigateProps> = (props) => {
    const { className } = props;

    return (
        <nav className={classNames(cls.navigate, {}, [])}>
            <div className="container">
                <div className={cls.navigateContent}>
                    <CustomLink className={cls.link} to='/'>Психотерапия</CustomLink>
                    <CustomLink className={cls.link} to='/for-business'>Для бизнеса</CustomLink>
                    <CustomLink className={cls.link} to='/about'>Обо мне</CustomLink>
                    <CustomLink className={cls.link} to='/#services'>Все услуги</CustomLink>
                    <CustomLink className={cls.link} to='/#certificates'>Подарочные сертификаты </CustomLink>
                    <CustomLink className={cls.link} to='/#contacts'>Контакты</CustomLink>
                </div>
            </div>
        </nav>
    );
}