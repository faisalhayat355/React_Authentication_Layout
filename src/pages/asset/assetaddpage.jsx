import { Box, Button, FormControl, Grid, InputAdornment, OutlinedInput, TextField, Typography } from '@mui/material';
import React, { useState } from 'react'
import {Link, Route, Routes,useNavigate} from 'react-router-dom';
import assetPostService from './services/assetPostService';
// import postService from './services/assetPostService';

const AssetAddPage = () => {
  const navigate = useNavigate();
  const [assettagid,setAssetTagId] = useState('')
  const [description,setDescription] = useState('')
  const [purchasefrom,setPurchaseFrom] = useState('')
  const [purchasedate,setPurchaseDate] = useState('')
  const [cost,setCost] = useState('')
  const [model,setModel] = useState('')
  const [brand,setBrand] = useState('')
  const [serialno,setSerialNo] = useState('')
  const [processor,setProcessor] = useState('')
  const [ram,setRam] = useState('')
  const [disktype,setDiskType] = useState('')
  const [status,setStatus] = useState('UnAssign')
  const [remarks,setRemarks] = useState('')
  const [image,setImage] = useState('')
  const [message,setMessage] = useState('')
  
  // const router = useRouter()
  
  const handleSubmit = async (event)=>{
      event.preventDefault();
      const formData = new FormData ();
      formData.append('assettagid',assettagid);
      formData.append('description',description);
      formData.append('brand',brand);
      formData.append('serialno',serialno);
      formData.append('model',model);
      formData.append('cost',cost);
      formData.append('status',status);
      formData.append('processor',processor);
      formData.append('ram',ram);
      formData.append('purchasedate',purchasedate);
      formData.append('purchasefrom',purchasefrom);
      formData.append('disktype',disktype);
      formData.append('remarks',remarks);
      formData.append('image',image);
  
      const response = await assetPostService.create(formData);
      if (response.data.success  ==true){
          alert("Asset Created Successfully")
      } else{
          setMessage("Post Failed")
      }
      setTimeout(function(){
          setMessage('');
      },2000)
      event.target.reset();
      navigate('/assetlist', {replace: true});
      // router.push('/assets/listofassets', { scroll: false })
  }

  return (
    <div>
    <Grid container>
      <Grid item xs={12}>
          <Typography style={{fontFamily:"cursive", fontSize:'1.3rem',marginLeft:'1.4rem'}}>Add Asset Details</Typography>
      </Grid>
    </Grid>
    <form onSubmit={handleSubmit}>
        <Box style={{marginTop:'1.5rem'}}>
          <Grid container spacing={2} sx={{background:'white',borderRadius:"8px 8px 0px 0px",borderTop:'3px solid #1F7DA9',paddingLeft:'1rem',paddingRight:'0.5rem',width:'96%',marginLeft:'1.3rem',alignItems:'center',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",paddingBottom:'1.2rem'}}>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Asset Tag ID</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='assettagid' placeholder='Enter Asset Tag ID' 
                      onChange={event => setAssetTagId(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Description</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small'fullWidth type='text' name='description' placeholder='Enter Description' 
                      onChange={event => setDescription(event.target.value)} required />
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Purchased From</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='purchasefrom' placeholder='Enter Purchased From' 
                      onChange={event => setPurchaseFrom(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Purchased Date</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='date' name='purchasedate' 
                      onChange={event => setPurchaseDate(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Cost</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      {/* <TextField size='small' fullWidth type='text' name='cost' placeholder='Enter Cost' 
                      onChange={event => setCost(event.target.value)} required/> */}
                      <FormControl fullWidth >
                          <OutlinedInput size="small" placeholder='Enter Cost' 
                          onChange={event => setCost(event.target.value)}
                           required id="outlined-adornment-amount" startAdornment={<InputAdornment position="start">₹</InputAdornment>}/>
                      </FormControl>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Model</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Model' 
                      onChange={event => setModel(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Brand</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Brand' 
                      onChange={event => setBrand(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Serial No.</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='position' placeholder='Enter Serial No.' 
                      onChange={event => setSerialNo(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Processor</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}   name="department"
                          value={processor} onChange={(e) => {setProcessor(e.target.value);}}>
                          <option>Select Processor</option>
                          <option>Dual Core</option>
                          <option>Pentium</option>
                          <option>Core i3</option>
                          <option>Core i5</option>
                          <option>Core i7</option>
                          <option>Core i9</option>
                      </select>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Ram</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}}   name="department"
                          value={ram} onChange={(e) => {setRam(e.target.value);}}>
                          <option>Select Ram</option>
                          <option>4 GB</option>
                          <option>8 GB</option>
                          <option>16 GB</option>
                      </select>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Disk Type</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <select style={{width:"100%",height:'6.2vh',border:'1px solid #9ca3af',borderRadius:'4px',padding:'0.4rem'}} name="department"
                          value={disktype} onChange={(e) => {setDiskType(e.target.value);}}>
                          <option>Select Disk Type</option>
                          <option>HDD</option>
                          <option>SSD</option>
                          <option>HDD or SSD</option>
                      </select>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Remarks</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                      <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='text' name='remarks' placeholder='Enter Remarks' 
                      onChange={event => setRemarks(event.target.value)} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container alignItems={"center"}>
                  <Grid item lg={3} xs={7}>
                      <Typography>Image</Typography>
                  </Grid>
                  <Grid item lg={2} xs={1}>
                  <Typography>:</Typography>
                  </Grid>
                  <Grid item lg={6.5} xs={12}>
                      <TextField size='small' fullWidth type='file' name='image' 
                      onChange={event => setImage(event.target.files[0])} required/>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item lg={6} xs={12}>
              <Grid container>
                  <Grid item lg={11.5} xs={12} style={{display:'flex',justifyContent:'flex-end'}}>
                      <Link to="/assetlist">
                          <Button variant='contained' size='small' style={{marginRight:'4.5rem',width:'95%',height:'40px'}}>Cancel</Button>
                      </Link>
                          <Button variant='contained' size='small' style={{width:'27.7%'}} type='submit'>Save</Button>
                  </Grid>
              </Grid>
          </Grid>
          <Grid item xs={6}>
              <Grid container alignItems={"center"}>
                  <Grid item xs={6.5}>
                      <select 
                      value={status} onChange={(e) => {setStatus(e.target.value);}}
                       style={{width:"100%",height:'6.2vh',border:'1px solid white',borderRadius:'4px',padding:'0.4rem',color:'white'}} disabled></select>
                  </Grid>
              </Grid>
          </Grid>
          {/* <Grid item lg={6} xs={12}></Grid> */}
          </Grid> 
        </Box>
    </form>
  </div>
  )
}

export default AssetAddPage
