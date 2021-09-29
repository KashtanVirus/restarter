import { Button, Carousel, Typography } from 'antd'
import Link from 'next/link'
import Head from 'next/head'
import { ReactNode } from 'react'
import { UnauthorizedLayout } from '@/shared/components/UnauthorizedLayout'
import { PATH } from '@/config'
import styles from '@/screens/Home/Home.module.scss'
import { Page } from '@/screens/Home/Page/Page'
import Hueta1 from '@/screens/Home/assets/hueta1.svg'
import Hueta2 from '@/screens/Home/assets/hueta2.svg'
import Hueta3 from '@/screens/Home/assets/hueta3.svg'
import Hueta4 from '@/screens/Home/assets/hueta4.svg'

export const Home = () => {
  return (
    <>
      <Head>
        <title>Recycle starter</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <Carousel className={styles.slider}>
            <Page
              postfix='тонн макулатуры'
              prefix='Всего собрано'
              src={Hueta1}
              value={500}
            />
            <Page
              postfix='деревьев'
              prefix='Спасено'
              src={Hueta2}
              value={500000}
            />
            <Page
              postfix='МВт*ч электроэнергии'
              prefix='Сэкономлено'
              src={Hueta3}
              value={500}
            />
            <Page
              postfix='кубометров воды'
              prefix='Сохранено'
              src={Hueta4}
              value={500000}
            />
          </Carousel>
          <div className={styles.side}>
            <Typography.Title>RecycleStarter</Typography.Title>
            <Typography.Paragraph>
              Сервис для раздельного сбора макулатуры
            </Typography.Paragraph>
            <Link passHref href={PATH.FILL}>
              <Button size='large' type='primary'>
                Ввести ID контейнера
              </Button>
            </Link>
            <Link passHref href={PATH.ADD_CONTAINER}>
              <Button className={styles.join} size='large' type='link'>
                Присоединиться к сервису
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

Home.layout = ({ children }: { children: ReactNode }) => (
  <UnauthorizedLayout ghost>{children}</UnauthorizedLayout>
)
