import './Header.css';

import godark from '../assets/images/godark.svg';
import sun from '../assets/images/sun.svg';

import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../App.js';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        const parent = document.querySelectorAll('.menu-icon span');
        Array.from(parent).forEach(span => {
            span.classList.toggle('open');
        })
    }

    render() {
        Header.contextType = ThemeContext;
        let buttonSpan;

        if (this.context) {
            buttonSpan = <><span>Go light</span><img src={sun} alt="light mode"/></>
        } else {
            buttonSpan = <><span>Go Dark</span><img src={godark} alt="dark mode"/></>;
        }
        return (
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">
                            <svg className="header-logo" viewBox="0 0 178 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path id="logo-name" d="M7.084 1.076H2.548V23H7.084V1.076ZM26.9843 17.4L24.1843 8.048H20.1523L17.3523 17.316H17.3243L14.6363 8.048H10.1563L14.8043 23H19.0323L22.1123 13.452H22.1403L25.1923 23H29.4763L34.1803 8.048H29.8123L26.9843 17.4ZM40.423 23.28C42.411 23.28 43.895 22.552 44.903 21.124L44.959 21.152V23H48.991V13.732C48.991 9.812 46.443 7.712 42.495 7.712C39.219 7.712 36.923 8.888 35.635 11.268L38.967 13.256C39.723 11.912 40.815 11.24 42.299 11.24C43.867 11.24 44.707 12.052 44.707 13.088C44.707 13.816 44.315 14.18 43.531 14.18H42.047C40.367 14.18 38.967 14.432 37.595 15.076C36.251 15.72 35.383 17.008 35.383 18.772V18.828C35.383 20.172 35.859 21.264 36.839 22.076C37.819 22.888 39.023 23.28 40.423 23.28ZM41.683 20.088C40.563 20.088 39.779 19.584 39.779 18.576C39.779 17.456 40.787 16.868 42.047 16.868H44.679V17.204C44.679 18.856 43.559 20.088 41.683 20.088ZM57.2434 15.916H57.3554L62.6474 23H68.1634L61.9754 14.936L67.9954 8.048H62.4234L57.2434 13.928V0.179998H52.8754V23H57.2434V15.916ZM72.3673 0.123999C70.9113 0.123999 69.6793 1.356 69.6793 2.84C69.6793 4.324 70.9113 5.528 72.3673 5.528C73.9073 5.528 75.1113 4.324 75.1113 2.84C75.1113 1.3 73.9073 0.123999 72.3673 0.123999ZM74.6073 23V8.048H70.2113V23H74.6073ZM92.6332 23V13.704C92.6332 12.024 92.1852 10.624 91.2612 9.476C90.3652 8.328 89.0212 7.768 87.2292 7.768C86.5852 7.768 85.8012 7.796 84.4852 8.552C83.8412 8.916 83.3652 9.392 83.0012 10.008H82.9732V8.048H78.6332V23H83.0012V14.712C83.0012 13.06 83.9252 11.8 85.6892 11.8C87.3972 11.8 88.2932 12.948 88.2932 14.712V23H92.6332ZM36.3407 40.052C36.3407 43.216 37.4327 45.876 39.6447 48.06C41.8567 50.244 44.5167 51.336 47.6807 51.336C50.8447 51.336 53.5327 50.244 55.7447 48.032C57.9847 45.82 59.1047 43.104 59.1047 39.94C59.1047 36.804 58.0127 34.144 55.8007 31.988C53.6167 29.832 50.9567 28.74 47.7927 28.74C44.6287 28.74 41.9407 29.832 39.7007 32.044C37.4607 34.256 36.3407 36.916 36.3407 40.052ZM42.9487 35.152C44.2647 33.808 45.8607 33.136 47.7367 33.136C49.6127 33.136 51.2087 33.808 52.5247 35.152C53.8407 36.496 54.4847 38.12 54.4847 40.024C54.4847 41.928 53.8407 43.552 52.5247 44.924C51.2087 46.268 49.6127 46.94 47.7367 46.94C45.8607 46.94 44.2647 46.268 42.9487 44.924C41.6327 43.552 40.9887 41.928 40.9887 40.024C40.9887 38.12 41.6327 36.496 42.9487 35.152ZM78.8283 39.8C80.4523 39.8 81.2643 40.752 81.2643 42.656V51H85.6323V41.676C85.6323 38.064 83.8683 35.712 80.3683 35.712C78.2683 35.712 76.8683 36.44 75.4123 38.092C74.5723 36.496 73.1163 35.712 71.0443 35.712C69.2523 35.712 67.4883 36.552 66.6763 38.008H66.6203V36.048H62.3363V51H66.7043V42.712C66.7043 40.948 67.6003 39.8 69.3643 39.8C70.9883 39.8 71.8003 40.78 71.8003 42.712V51H76.1403V42.656C76.1403 40.892 77.1203 39.8 78.8283 39.8ZM88.592 43.552C88.592 45.792 89.376 47.64 90.944 49.124C92.512 50.608 94.444 51.336 96.74 51.336C99.008 51.336 100.94 50.58 102.536 49.096C104.132 47.584 104.916 45.708 104.916 43.468C104.916 41.256 104.132 39.436 102.564 37.952C100.996 36.468 99.064 35.712 96.796 35.712C94.528 35.712 92.568 36.468 90.972 37.98C89.376 39.464 88.592 41.34 88.592 43.552ZM93.072 43.496C93.072 42.404 93.436 41.48 94.136 40.78C94.836 40.052 95.704 39.688 96.74 39.688C97.776 39.688 98.672 40.052 99.372 40.78C100.072 41.48 100.436 42.404 100.436 43.496C100.436 45.736 98.868 47.332 96.768 47.332C95.732 47.332 94.836 46.968 94.136 46.268C93.436 45.54 93.072 44.616 93.072 43.496ZM117.268 47.304C116.96 47.388 116.624 47.416 116.26 47.416C114.552 47.416 113.656 46.744 113.656 45.036V39.828H117.352V36.048H113.656V31.372H109.344V36.048H106.6V39.828H109.288V45.568C109.288 49.068 111.332 51.196 115.224 51.196C115.952 51.196 116.624 51.112 117.268 50.916V47.304ZM119.518 43.552C119.518 45.792 120.302 47.64 121.87 49.124C123.438 50.608 125.37 51.336 127.666 51.336C129.934 51.336 131.866 50.58 133.462 49.096C135.058 47.584 135.842 45.708 135.842 43.468C135.842 41.256 135.058 39.436 133.49 37.952C131.922 36.468 129.99 35.712 127.722 35.712C125.454 35.712 123.494 36.468 121.898 37.98C120.302 39.464 119.518 41.34 119.518 43.552ZM123.998 43.496C123.998 42.404 124.362 41.48 125.062 40.78C125.762 40.052 126.63 39.688 127.666 39.688C128.702 39.688 129.598 40.052 130.298 40.78C130.998 41.48 131.362 42.404 131.362 43.496C131.362 45.736 129.794 47.332 127.694 47.332C126.658 47.332 125.762 46.968 125.062 46.268C124.362 45.54 123.998 44.616 123.998 43.496ZM143.602 49.404L139.934 58.364H144.61L153.682 36.048H149.174L145.842 44.588L142.118 36.048H137.302L143.602 49.404ZM169.861 44.728C169.889 44.392 169.917 43.86 169.917 43.16C169.917 40.948 169.217 39.128 167.845 37.756C166.473 36.384 164.681 35.684 162.469 35.684C160.313 35.684 158.437 36.44 156.869 37.98C155.329 39.52 154.545 41.34 154.545 43.496C154.545 45.792 155.329 47.668 156.897 49.152C158.493 50.608 160.425 51.336 162.749 51.336C165.801 51.336 167.929 50.216 169.189 47.948L166.025 45.876C165.353 46.968 164.009 47.668 162.693 47.668C160.817 47.668 159.249 46.548 158.997 44.728H169.861ZM159.109 41.844C159.193 41.256 159.529 40.668 160.117 40.108C160.705 39.52 161.461 39.24 162.357 39.24C164.345 39.24 165.437 40.528 165.549 41.844H159.109Z"/>
                                <rect y="33" width="31" height="14" fill="#32E0C4"/>
                                <rect x="99" y="9" width="72" height="14" fill="#32E0C4"/>
                            </svg>
                        </Link>
                    </li>
                    <li>
                        <button className="godark-button" onClick={() => this.props.onChangeTheme()}>
                            {buttonSpan}
                        </button>
                        <div className="menu" onClick={this.toggleMenu}>
                            <span className="menu-text">MENU</span>
                            <span className="menu-icon">
                                <span></span>
                                <span></span>
                            </span>
                        </div>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default Header;