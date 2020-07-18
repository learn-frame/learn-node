import { promises as dnsPromises } from 'dns'
import { BAIDU_DOMAIN, GOOGLE_DOMAIN, YANCEY_DOMIN } from '../shared/constants'

//
const getLookUp = async (url: string) => {
  try {
    const { address, family } = await dnsPromises.lookup(url, {
      family: 0, // 记录的地址族: 0 | 4 | 6
      hints: 0,
      all: false,
      verbatim: true,
    })
    console.log(`地址: ${address} 地址族: IPv${family}s`)
  } catch (e) {
    throw new Error(e)
  }
}
// 地址: 104.31.78.7 地址族: IPv4s
getLookUp(BAIDU_DOMAIN)

// 使用 DNS 协议解析 IPv4 地址
const getResolve4 = async (url: string) => {
  try {
    const addresses = await dnsPromises.resolve4(url)
    console.log(addresses)
  } catch (e) {
    throw new Error(e)
  }
}
// [ '216.58.200.238' ]
getResolve4(GOOGLE_DOMAIN)

// 使用 DNS 协议解析 IPv6 地址
const getResolve6 = async (url: string) => {
  try {
    const addresses = await dnsPromises.resolve6(url)
    console.log(addresses)
  } catch (e) {
    throw new Error(e)
  }
}
// [
//   '2606:4700:3035::681f:4e07',
//   '2606:4700:3034::681f:4f07',
//   '2606:4700:3032::ac43:df01'
// ]
getResolve6(YANCEY_DOMIN)

const getDomainFromIP = async (ip: string) => {
  try {
    const hostnames = await dnsPromises.reverse(ip)
    console.log(hostnames)
  } catch (e) {
    throw new Error(e)
  }
}
// [ 'yanceyleo.com' ]
getDomainFromIP('39.156.69.79')
