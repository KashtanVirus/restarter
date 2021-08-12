import { ReactNode } from 'react'
import { PageHeader } from 'antd'
import styles from '@/shared/components/AuthorizedLayout/AuthorizedLayout.module.scss'
import { Navigation } from '@/shared/components/AuthorizedLayout/Navigation/Navigation'

interface Props {
  children: ReactNode
}

export const AuthorizedLayout = ({ children }: Props) => {
  return (
    <>
      <PageHeader
        className={styles.header}
        ghost={false}
        title='Recycling Starter'
      />
      <div className={styles.wrapper}>
        <Navigation />
        <div className={styles.content}>{children}</div>
      </div>
    </>
  )
}
