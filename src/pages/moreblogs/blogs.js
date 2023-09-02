
import { Link, useHistory } from "react-router-dom";
import('./blogs.css')
const blog = () => {
    return (
        <div className='blogs1'>
            <div className="blogs2">
                <div className="container3">
                    <div className="box1">
                        <div className="p1">
                            <img src="/assets/picture1.png"/>
                            <div className="font">
                                Since then, everything had been a routine until now. Thien was wondering, for what reason that...<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                        <div className="p1">
                            <img src="/assets/picture2.png"/>
                            <div className="font">
                                Thien was quite shock, but fast to calm himself down. He had never stopped being surprised whenever..<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                        <div className="p3">
                            <img src="/assets/picture3.png"/>
                            <div className="font">
                                A first day month, no moon, no clouds. All the stars were shining on above. The fall skyline was really...<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container3">
                    <div className="box1">
                        <div className="p1">
                            <img src="/assets/picture1.png"/>
                            <div className="font">
                                Since then, everything had been a routine until now. Thien was wondering, for what reason that...<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                        <div className="p1">
                            <img src="/assets/picture2.png"/>
                            <div className="font">
                                Thien was quite shock, but fast to calm himself down. He had never stopped being surprised whenever..<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                        <div className="p3">
                            <img src="/assets/picture3.png"/>
                            <div className="font">
                                A first day month, no moon, no clouds. All the stars were shining on above. The fall skyline was really...<nav><Link to="/patrons">Read more</Link></nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default blog;