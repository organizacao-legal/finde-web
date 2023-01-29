import Card from '../card/card';
import s from './feed.module.scss';

export default function Feed() {

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
        </div>

        <div className={s.btnGroup}>
          <button type="button">Hot</button>
          <button type="button">New</button>
          <button type="button">Mine</button>
        </div>

        <div>
          <Card />
        </div>
      </div>
    </>
  )
}