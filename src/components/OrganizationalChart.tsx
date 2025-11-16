import { useLanguage } from '../context/LanguageContext';
import { Tree, TreeNode } from 'react-organizational-chart';
import styled from '@emotion/styled';

interface StyledNodeProps {
  highlight?: boolean;
}

const StyledNode = styled.div<StyledNodeProps>`
  padding: 12px 16px;
  border-radius: 8px;
  display: inline-block;
  border: 2px solid ${(props: StyledNodeProps) => props.highlight ? 'rgba(245, 162, 1, 0.4)' : 'rgba(1, 60, 88, 0.2)'};
  background-color: white;
  transition: all 0.3s ease;
  min-width: 140px;
  text-align: center;
  
  &:hover {
    border-color: #F5A201;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  }
`;

const StyledTitle = styled.div`
  font-size: 10px;
  color: rgba(1, 60, 88, 0.6);
  font-weight: 600;
  margin-bottom: 4px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
`;

const StyledName = styled.div`
  font-size: 14px;
  color: #013C58;
  font-weight: 700;
`;

const OrganizationalChart = () => {
  const { content } = useLanguage();
  const orgData = content.about.organization;

  const OrgCard = ({ title, name, highlight = false }: { title: string; name: string; highlight?: boolean }) => (
    <StyledNode highlight={highlight}>
      <StyledTitle>{title}</StyledTitle>
      <StyledName>{name}</StyledName>
    </StyledNode>
  );

  return (
    <div className="w-full overflow-x-auto pb-8">
      <div className="inline-block min-w-full">
        <Tree
          lineWidth="2px"
          lineColor="rgba(1, 60, 88, 0.3)"
          lineBorderRadius="8px"
          label={<OrgCard title={orgData.director.title} name={orgData.director.name} />}
        >
          <TreeNode label={<OrgCard title={orgData.viceDirector.title} name={orgData.viceDirector.name} />} />
          
          <TreeNode label={<OrgCard title={orgData.secretary.title} name={orgData.secretary.name} />}>
            {orgData.departments.main.map((dept: any, index: number) => {
              const isDevDept = dept.title === "Development";
              
              return (
                <TreeNode key={index} label={<OrgCard title={dept.title} name={dept.name} />}>
                  {isDevDept && orgData.departments.development.subdivisions.map((sub: any, subIndex: number) => (
                    <TreeNode 
                      key={subIndex} 
                      label={<OrgCard title={sub.title} name={sub.name} highlight={true} />} 
                    />
                  ))}
                </TreeNode>
              );
            })}
          </TreeNode>
        </Tree>
      </div>
    </div>
  );
};

export default OrganizationalChart;
