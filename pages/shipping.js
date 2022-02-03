import {
  List,
  ListItem,
  Typography,
  TextField,
  Button,
} from '@material-ui/core'
import { useRouter } from 'next/router'
import React, { useContext, useEffect } from 'react'
import Layout from '../components/Layout.js'
import { Store } from '../utils/Store'
import useStyles from '../utils/styles'
import Cookies from 'js-cookie'
import { Controller, useForm } from 'react-hook-form'
import CheckoutWizard from '../components/CheckoutWizard.js'

export default function Shipping() {
  const {handleSubmit, control, formState: {errors}, setValue} = useForm()
  const router = useRouter()
  const { state, dispatch } = useContext(Store)
  const { userInfo, shippingAddress } = state
  useEffect(() => {
    if (!userInfo) {
      router.push('/login?redirect=/shipping')
    }
    setValue('fullName', shippingAddress.fullName)
    setValue('address', shippingAddress.address)
    setValue('city', shippingAddress.city)
    setValue('governorate', shippingAddress.governorate)
  }, [router, setValue, shippingAddress.address, shippingAddress.city, shippingAddress.fullName, shippingAddress.governorate, userInfo])
  const classes = useStyles();
  const submitHandler = ({ fullName, address, city, governorate }) => {
    dispatch({ type: 'SAVE_SHIPPING_ADDRESS', payload: { fullName, address, city, governorate } });
    Cookies.set('shippingAddress', JSON.stringify({ fullName, address, city, governorate }) )
    router.push('/payment')
  };
  return (
    <Layout title="Shipping Address">
      <CheckoutWizard activeStep={1} />
      <form onSubmit={handleSubmit(submitHandler)} className={classes.form}>
        <Typography component="h1" variant="h1">
          Shipping Address
        </Typography>
        <List>
          <ListItem>
            <Controller
              name='fullName'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                minLength: 2
              }}
              render={({field}) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="fullName"
                  label="Full Name"
                  error={Boolean(errors.fullName)}
                  helperText={errors.fullName? errors.fullName.type === 'minLength'?'Full Name length is more than 1':'Full Name is required' : ''}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          
          <ListItem>
            <Controller
              name='address'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                minLength: 2
              }}
              render={({field}) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="address"
                  label="Address"
                  error={Boolean(errors.address)}
                  helperText={errors.address? errors.address.type === 'minLength'?'Address length is more than 1':'Address is required' : ''}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          
          <ListItem>
            <Controller
              name='city'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                minLength: 2
              }}
              render={({field}) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="city"
                  label="City"
                  error={Boolean(errors.city)}
                  helperText={errors.city? errors.city.type === 'minLength'?'City length is more than 1':'City is required' : ''}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          
          <ListItem>
            <Controller
              name='governorate'
              control={control}
              defaultValue=''
              rules={{
                required: true,
                minLength: 2
              }}
              render={({field}) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  id="governorate"
                  label="Governorate"
                  error={Boolean(errors.governorate)}
                  helperText={errors.governorate? errors.governorate.type === 'minLength'?'Governorate length is more than 1':'Governorate is required' : ''}
                  {...field}
                ></TextField>
              )}
            ></Controller>
          </ListItem>
          
          <ListItem>
            <Button variant="contained" type="submit" fullWidth color="primary">
              Continue
            </Button>
          </ListItem>
        </List>
      </form>
    </Layout>
  )
}