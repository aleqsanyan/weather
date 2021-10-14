import React, {Fragment, useEffect} from "react"
import {useDispatch, useSelector} from "react-redux"

import {updateName, editName, deletePost} from "../actions/weatherAction"
import { RootState } from "../reducers"

const Country: React.FC = () => {

   // console.log(post,'posts')

      useEffect(() => {
          //dispatch(getPostData())
      }, [])

  /*  let getValue = (id: number, e: any): void => {
        let title: string = e.target.value
        dispatch(updateName({id, title}))
    }

    let edit = (id: number, hidden: boolean) => {
        let isHidden: boolean = !hidden
        dispatch(editName({id, isHidden}))
    }

    let remove = (id: number): void => {
        dispatch(deletePost(id))
    }*/

    return (
        <Fragment>
            <div className='weather-block'>
            </div>
            <div className=''>
            </div>
        </Fragment>
    )
}

export default Country