import {useEffect, useState} from "react";
import axios from "axios";


function BoardList(){
    const [boardList, setBoardList] = useState([]);

    useEffect(()=> {
        axios.get('http://localhost:8080/api/boardList')
            .then(res=>{
                // console.log(res);
                alert('데이터 불러오기 성공')

                const {data} = res;
                setBoardList(data);
            })
            .catch(err=>{
                console.log(err);
                alert('데이터 불러오기 실패')
            })
    },[])

    return(
        <div>
            <table className={'table table-hover table-striped'}>
                <colgroup>
                    <col width={'10%'}/>
                    <col width={'50%'}/>
                    <col width={'10%'}/>
                    <col width={'30%'}/>
                    <col width={'10%'}/>
                </colgroup>
                <thead>
                    <tr>
                        <th>글번호</th>
                        <th>글제목</th>
                        <th>글쓴이</th>
                        <th>등록일</th>
                        <th>조회수</th>
                    </tr>
                </thead>
                <tbody>
                {
                    boardList.map(item => {
                        return(
                            <tr key={item.boardIdx}>
                                <td>{item.boardIdx}</td>
                                <td>{item.title}</td>
                                <td>{item.createUser}</td>
                                <td>{item.createDate}</td>
                                <td>{item.hitCnt}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default BoardList;