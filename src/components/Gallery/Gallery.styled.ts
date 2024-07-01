import styled from 'styled-components';

export const GalleryWrapper = styled.div`
justify-content: center;
display: flex;
`;

export const Container = styled.div`
width: 600px;
margin-top: 12px;
`;

export const SearchBar = styled.div`
width: 600px;
display: flex;
justify-content: center;
margin-top: 10px;
`;

export const InputBar = styled.input`
background-color: rgb(50, 50, 50);
color: white; 
padding: 4px 8px 4px 8px;
border-radius: 4px;
border: 0;
`;

export const SearchButton = styled.button`
background-color: rgb(50, 50, 50);
color: white; 
padding: 4px 8px 4px 8px;
border-radius: 4px;
border: 0;
margin-left: 12px;
cursor: pointer;
&:hover {
    background-color: rgb(60, 60, 60);
}
&:active {
    background-color: rgb(70, 70, 70);
}
`;