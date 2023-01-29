import React, {  } from 'react';
import Card from '../card/card';
import s from './feed.module.scss';

export default function Feed() {

  const selectedButton = ({ target }: React.MouseEvent<HTMLButtonElement>) => {
    console.log('// TO DO: Highlight button', target);
  };

  function submit(e: React.MouseEvent<HTMLButtonElement>) {
    console.log('// TO DO: Submit post', e.target);
  }

  return (
    <>
      <div className={s.Feed}>
        <div className={s.heading}>
          <h1>Projetinho</h1>
          <span>Post anything anonymously.</span>
        </div>

        <div className={s.body}>
          <input type="text" name="post" id="post" />
          <span>Your note will be automatically deleted after 24 hours.</span>
          <button type="submit" onClick={(event) => submit(event)}>Add post</button>
        </div>

        <div className={s.btnGroup}>
          <button
            type="button"
            id="btn-hot"
            onClick={(event) => selectedButton(event)}
            >Hot</button>

          <button
            type="button"
            id="btn-new"
            onClick={(event) => selectedButton(event)}
            >New</button>

          <button
            type="button"
            id="btn-mine"
            onClick={(event) => selectedButton(event)}
            >Mine</button>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </>
  )
}