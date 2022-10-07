import styles from "./index.module.css"

export function Sidebar() {
    return (

        <aside className={styles.sidebar}>

            <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1206&q=80" />

            <div>
                <img className={styles.avatar} src="https://github.com/brunobfuhr.png" />


                <div>
                    <strong>Bruno B.Fuhr</strong>
                    <span>Front-end Student | Html | Css | JavaScript | React </span>
                </div>
            </div>
        </aside>
    )
}
