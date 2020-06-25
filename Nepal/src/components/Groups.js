import React from "react";
import { Component } from 'react';
import styled from "styled-components";
import Image from 'react-image-resizer';
import yeo from './world.jpg';
import {DropdownButton, Dropdown} from 'react-bootstrap';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";
import styles from './Groups.module.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function SimpleTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}


const Section = styled.section`
  /padding: 30px 0 225px;
`;
const SectionTitle = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: #fafafa;
  text-align: center;
  margin-top: 2px;
  display:"block",
  justifyContent: "center",
  margin:"0 auto"
  
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 0px;
  &:hover {
    transform: translateY(-5px) !important;
  }

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;



const JoinButton3 = styled.button`
    font-size: 14px;
    letter-spacing: 1.9px;
    font-weight: 100;
    margin:10px;
    padding: 16px 1.5em;
    color: white;
    background-color: #e50914;
    cursor: pointer;
    text-decoration: none;
    vertical-align: middle;
    font-family: Arial, sans-serif;
    border-radius: 2px;
    user-select: none;
    text-align: center;
    border: 0;
    &:hover {
        background-color: #E53935;
    }
  
`;


// class Post extends Component {
//   render() {
//     return (
//       <div className="post">
//         <span>{this.props.content}</span>
//       </div>
//     )
//   }
// }

// class Feed extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       posts: [
//         {content: 'This is my first post!'},
//         {content: 'This is my second post!'}
//       ]
//     }
//   }
//   render() {
//     const posts = this.state.posts.map((post, index) =>
//       <Post key={index} value={post} />
//     );
//     return (
//       <div className="feed">
//         {posts}
//       </div>
//     )
//   }
// }


const Post = (props) => {
  debugger;
  return (

    <div className={styles.post}>
      <img src={require("../assets/img/Nepal_flag.png")} alt="Nepal Flag" float="left"></img>
      <span className={styles.label}>{props.category}</span>
      <span className={styles.content}>{props.value.content}</span>
    </div>
  )
}


const Feed = (props) => {
  const posts_data = [
      {content: 'This is my first post!'},
      {content: 'This is my second post!'}
    ]

  const posts = posts_data.map((post, index) =>
    <Post key={index} value={post} category='LOL'/>
  );

  return (
    <div className="feed">
      {posts}
    </div>
  )
  
}


const Groups = () => {
  const width = window.innerWidth;
  return (
    <Section id="groups">
      <div className="container">
        {/* <SimpleTable/> */}
        <Feed> </Feed>
      </div>
    </Section>
  );
};

export default Groups;
