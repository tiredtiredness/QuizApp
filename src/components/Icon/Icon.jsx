/* eslint-disable react/prop-types */
import styles from './Icon.module.css';

const Icon = ({ type, size = 'big', color = 'default' }) => {
  const iconColor = color === 'default' ? '#F1F1EF' : '#125365';
  const iconSize = size === 'big' ? styles.iconBig : styles.iconSmall;
  switch (type) {
    case 'cross':
      return (
        <svg
          width='40'
          height='40'
          viewBox='0 0 40 40'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={iconSize}
        >
          <circle
            cx='19.65'
            cy='19.65'
            r='15.15'
            stroke={iconColor}
            strokeWidth='3'
          />
          <path
            d='M24.7763 16.0624C25.2018 15.6368 25.2018 14.9458 24.7763 14.5203C24.3508 14.0948 23.6598 14.0948 23.2343 14.5203L19.6498 18.1082L16.0619 14.5237C15.6364 14.0982 14.9453 14.0982 14.5198 14.5237C14.0943 14.9492 14.0943 15.6402 14.5198 16.0658L18.1077 19.6503L14.5232 23.2382C14.0977 23.6637 14.0977 24.3547 14.5232 24.7802C14.9487 25.2057 15.6398 25.2057 16.0653 24.7802L19.6498 21.1923L23.2377 24.7768C23.6632 25.2023 24.3542 25.2023 24.7797 24.7768C25.2052 24.3513 25.2052 23.6603 24.7797 23.2348L21.1918 19.6503L24.7763 16.0624Z'
            fill={iconColor}
            stroke={iconColor}
          />
        </svg>
      );
    case 'plus':
      return (
        <svg
          width='60'
          height='60'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={iconSize}
        >
          <circle cx='30' cy='30' r='23' stroke={iconColor} strokeWidth='4' />
          <path
            d='M31.3846 22.3846C31.3846 21.6187 30.7659 21 30 21C29.2341 21 28.6154 21.6187 28.6154 22.3846V28.6154H22.3846C21.6187 28.6154 21 29.2341 21 30C21 30.7659 21.6187 31.3846 22.3846 31.3846H28.6154V37.6154C28.6154 38.3813 29.2341 39 30 39C30.7659 39 31.3846 38.3813 31.3846 37.6154V31.3846H37.6154C38.3813 31.3846 39 30.7659 39 30C39 29.2341 38.3813 28.6154 37.6154 28.6154H31.3846V22.3846Z'
            fill={iconColor}
            stroke={iconColor}
          />
        </svg>
      );
    case 'minus':
      return (
        <svg
          width='60'
          height='60'
          viewBox='0 0 60 60'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
          className={iconSize}
        >
          <circle cx='30' cy='30' r='23' stroke={iconColor} strokeWidth='4' />
          <path
            d='M39 30.3846C39 31.1505 38.3813 31.7692 37.6154 31.7692H22.3846C21.6187 31.7692 21 31.1505 21 30.3846C21 29.6187 21.6187 29 22.3846 29H37.6154C38.3813 29 39 29.6187 39 30.3846Z'
            fill={iconColor}
            stroke={iconColor}
          />
        </svg>
      );
  }
};

export default Icon;
