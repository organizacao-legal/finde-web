import Image from 'next/image';

import { cards } from '@/consts/card.const';
import s from './card.module.scss';

// icons
import impressions from '../../icons/impressions.svg';
import comment from '../../icons/comment.svg';
import share from '../../icons/share.svg';
import hourGlass from '../../icons/hour-glass.svg';

export default function Card() {
  const icons = { impressions, comment, share, hourGlass };

    return (
      <>
        <div>
          { cards.map((item) => 
            <div key={item.post}>
              <span className={s.title}>{item.post}</span>

              <div className={s.opts}>
                <div className={s.icons}>
                  <Image src={icons.impressions} alt="Impressions" className={s.img} />
                  <span>{item.impressions}</span>
                </div>

              <div className={s.icons}>
                <Image src={icons.comment} alt="Reply" className={s.img} />
                <span>Reply</span>
              </div>

              <div className={s.icons}>
                <Image src={icons.share} alt="Share" className={s.img} />
                <span>Share</span>
              </div>

              <div className={s.icons}>
                <Image src={icons.hourGlass} alt="Time" className={s.img} />
                <span>{item.time}</span>
              </div>
              </div>

                {
                  item.comment.map((item) => 
                    <div className={s.comment} key={item}>
                      <div className={s.quoteMark}></div>
                      <span>{item}</span>
                    </div>
                )}
            </div>
          )}
        </div>
      </>
    )
}