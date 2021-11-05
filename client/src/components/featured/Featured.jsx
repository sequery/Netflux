import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

function Featured({type}) {
    return (
        <div className='featured'>
            {type && (
                <div className="category">
                    <span> {type === "movie" ? "Movies" : "Series"} </span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="horror">Horror</option>
                        <option value="comedy">Comedy</option>
                        <option value="romance">Romance</option>
                        <option value="action">Action</option>v
                        <option value="drama">Drama</option>
                        <option value="animation">Animation</option>
                        <option value="documentary">Documentary</option>
                    </select>
                </div>
            )}
            <img src="https://cdn2.unrealengine.com/Fortnite%2Fblog%2Fstar-wars-returns-to-fortnite-for-may-the-fourth%2Ffortnite-star-wars-outfits-header-1920x1080-1e74e4cedf407339c88b77d2f53e03cad9133636.jpg" alt="Featured Medias" width="100%"></img>
            <div className="info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow />
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined />
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
