import dns from 'dns'
import { YANCEY_DOMIN, BAIDU_DOMAIN } from '../shared/constants'

// dns.lookup(BAIDU_DOMAIN, (err, address, family) => {
//   console.log('地址: %j 地址族: IPv%s', address, family)
// })

dns.resolve4('baidu.com', (err, addresses) => {
  if (err) throw err

  console.log(`地址: ${JSON.stringify(addresses)}`)

  addresses.forEach((a) => {
    dns.reverse(a, (err, hostnames) => {
      if (err) {
        throw err
      }
      console.log(`地址 ${a} 逆向到: ${JSON.stringify(hostnames)}`)
    })
  })
})
